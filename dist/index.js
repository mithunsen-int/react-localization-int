"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = exports.LocalizationProvider = void 0;
var react_1 = require("react");
/**
 * Context for localization.
 * @type {React.Context<LocalizationContextType | undefined>}
 */
var LocalizationContext = (0, react_1.createContext)(undefined);
/**
 * Localization provider component.
 * @param {Props} props - Props for LocalizationProvider.
 * @returns {React.ReactElement} A React component.
 */
var LocalizationProvider = function (_a) {
    var children = _a.children, _b = _a.defaultLocale, defaultLocale = _b === void 0 ? 'en' : _b, source = _a.source;
    var _c = (0, react_1.useState)(defaultLocale), locale = _c[0], setLocale = _c[1];
    var _d = (0, react_1.useState)({}), translations = _d[0], setTranslations = _d[1];
    /**
     * Function to change the locale.
     * @param {string} locale - The new locale to set.
     */
    var changeLocale = function (locale) {
        setLocale(locale);
    };
    /**
     * Function to load translations for the locale.
     * @param {string} locale - The locale for which translations need to be loaded.
     */
    var loadTranslations = function (locale) {
        try {
            if (locale && (source === null || source === void 0 ? void 0 : source.hasOwnProperty(locale))) {
                setTranslations(source[locale]);
            }
            else {
                throw new Error('Provided locale does not exist in source!');
            }
        }
        catch (error) {
            console.log("Failed to load translations for locale: '".concat(locale, "'."), error);
        }
    };
    /**
     * Function to translate a key.
     * @param {string} key - The key to translate.
     * @returns {string} The translated string.
     */
    var t = function (key) { return translations[key] || key; };
    (0, react_1.useEffect)(function () {
        (function () {
            locale && loadTranslations(locale);
        })();
    }, [locale]);
    (0, react_1.useEffect)(function () {
        console.log('Using translation: ', translations);
    }, [translations]);
    return (react_1.default.createElement(LocalizationContext.Provider, { value: { t: t, locale: locale, changeLocale: changeLocale } }, children));
};
exports.LocalizationProvider = LocalizationProvider;
/**
 * Hook to use translations in components.
 * @returns {LocalizationContextType} Localization context.
 */
var useTranslation = function () {
    var context = (0, react_1.useContext)(LocalizationContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within LocalizationProvider");
    }
    return context;
};
exports.useTranslation = useTranslation;
