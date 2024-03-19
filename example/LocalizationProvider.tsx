import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface LocalizationContextType {
    locale: string;
    changeLocale: (locale: string) => void;
    t: any;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface Props {
    defaultLocale?: string;
    source?: { [key: string]: { [key: string]: string } };
    children: ReactNode
}

export const LocalizationProvider = ({ children, defaultLocale = 'en', source }: Props) => {
    const [locale, setLocale] = useState(defaultLocale);
    const [translations, setTranslations] = useState<{ [key: string]: string }>({});

    const changeLocale = (locale: string) => {
        setLocale(locale);
    };

    const loadTranslations = async (locale: string) => {
        try {
            if (locale && source?.hasOwnProperty(locale)) {
                setTranslations(source[locale]);
            } else {
                throw 'Provided locale does not exists in source!';
            }
        } catch (error) {
            console.log(`Failed to load translations for locale: '${locale}'.`, error);
            return {};
        }
    };

    const t = (key: string) => translations[key] || key;

    useEffect(() => {
        (() => {
            locale && loadTranslations(locale);
        })();
    }, [locale]);

    useEffect(() => {
        console.log('Using translation: ', translations);
    }, [translations]);

    return (
        <LocalizationContext.Provider value={{ t, locale, changeLocale }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LocalizationContext);
    if (context === undefined) {
        throw new Error(
            "useTranslation must be used within LocalizationProvider"
        );
    }
    return context;
}