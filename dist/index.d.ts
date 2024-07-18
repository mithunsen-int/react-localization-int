import React, { ReactNode } from "react";
/**
 * Interface for LocalizationContextType.
 * @interface
 */
export interface LocalizationContextType {
    locale: string;
    changeLocale: (locale: string) => void;
    t: (key: string) => string;
}
/**
 * Context for localization.
 * @type {React.Context<LocalizationContextType | undefined>}
 */
export declare const LocalizationContext: React.Context<LocalizationContextType>;
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
 * @returns {React.FC} A React component.
 */
export declare const LocalizationProvider: ({ children, defaultLocale, source, }: Props) => JSX.Element;
/**
 * Hook to use translations in components.
 * @returns {LocalizationContextType} Localization context.
 */
export declare const useTranslation: () => LocalizationContextType;
export {};
