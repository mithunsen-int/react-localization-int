import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

/**
 * Interface for LocalizationContextType.
 * @interface
 */
interface LocalizationContextType {
    locale: string;
    changeLocale: (locale: string) => void;
    t: (key: string) => string;
}

/**
 * Context for localization.
 * @type {React.Context<LocalizationContextType | undefined>}
 */
const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

/**
 * Props interface for LocalizationProvider component.
 * @interface
 */
interface Props {
    defaultLocale?: string;
    source?: { [key: string]: { [key: string]: string } };
    children: ReactNode
}

/**
 * Localization provider component.
 * @param {Props} props - Props for LocalizationProvider.
 * @returns {React.ReactElement} A React component.
 */
export const LocalizationProvider = ({ children, defaultLocale = 'en', source }: Props): React.ReactElement => {
    const [locale, setLocale] = useState(defaultLocale);
    const [translations, setTranslations] = useState<{ [key: string]: string }>({});

    /**
     * Function to change the locale.
     * @param {string} locale - The new locale to set.
     */
    const changeLocale = (locale: string): void => {
        setLocale(locale);
    };

    /**
     * Function to load translations for the locale.
     * @param {string} locale - The locale for which translations need to be loaded.
     */
    const loadTranslations = (locale: string): void => {
        try {
            if (locale && source?.hasOwnProperty(locale)) {
                setTranslations(source[locale]);
            } else {
                throw new Error('Provided locale does not exist in source!');
            }
        } catch (error) {
            console.log(`Failed to load translations for locale: '${locale}'.`, error);
        }
    };

    /**
     * Function to translate a key.
     * @param {string} key - The key to translate.
     * @returns {string} The translated string.
     */
    const t = (key: string): string => translations[key] || key;

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

/**
 * Hook to use translations in components.
 * @returns {LocalizationContextType} Localization context.
 */
export const useTranslation = (): LocalizationContextType => {
    const context = useContext(LocalizationContext);
    if (context === undefined) {
        throw new Error(
            "useTranslation must be used within LocalizationProvider"
        );
    }
    return context;
}
