/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LandingPage } from './LandingPage';
import { LocalizationProvider } from './LocalizationProvider';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LocalizationProvider source={{ en: enTranslations, fr: frTranslations }} defaultLocale='fr'>
        <LandingPage />
      </LocalizationProvider>
    </GestureHandlerRootView>
  );
}

export default App;
