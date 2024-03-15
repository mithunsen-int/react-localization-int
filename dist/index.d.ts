import { ReactNode } from 'react';
interface Props {
    defaultLocale?: string;
    source?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    children: ReactNode;
}
export declare const LocalizationProvider: ({ children, defaultLocale, source }: Props) => any;
export declare const useTranslation: () => any;
export {};
