"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = exports.LocalizationProvider = void 0;
var react_1 = require("react");
var LocalizationContext = (0, react_1.createContext)(undefined);
var LocalizationProvider = function (_a) {
    var children = _a.children, _b = _a.defaultLocale, defaultLocale = _b === void 0 ? 'en' : _b, source = _a.source;
    var _c = (0, react_1.useState)(defaultLocale), locale = _c[0], setLocale = _c[1];
    var _d = (0, react_1.useState)({}), translations = _d[0], setTranslations = _d[1];
    var changeLocale = function (locale) {
        setLocale(locale);
    };
    var loadTranslations = function (locale) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                if (locale && (source === null || source === void 0 ? void 0 : source.hasOwnProperty(locale))) {
                    setTranslations(source[locale]);
                }
                else {
                    throw 'Provided locale does not exists in source!';
                }
            }
            catch (error) {
                console.log("Failed to load translations for locale: '".concat(locale, "'."), error);
                return [2 /*return*/, {}];
            }
            return [2 /*return*/];
        });
    }); };
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
var useTranslation = function () {
    var context = (0, react_1.useContext)(LocalizationContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within LocalizationProvider");
    }
    return context;
};
exports.useTranslation = useTranslation;
