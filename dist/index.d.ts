import { ReactNode } from 'react';
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
 * Props interface for LocalizationProvider component.
 * @interface
 */
interface Props {
    defaultLocale?: string;
    source?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    children: ReactNode;
}
/**
 * Localization provider component.
 * @param {Props} props - Props for LocalizationProvider.
 * @returns {React.ReactElement} A React component.
 */
export declare const LocalizationProvider: ({ children, defaultLocale, source }: Props) => React.ReactElement;
/**
 * Hook to use translations in components.
 * @returns {LocalizationContextType} Localization context.
 */
export declare const useTranslation: () => LocalizationContextType;
export {};
