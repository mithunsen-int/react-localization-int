/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { LocalizationProvider } from './LocalizationProvider';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';
import { Home } from './Home';
import { View } from 'react-native';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <LocalizationProvider source={{ en: enTranslations, fr: frTranslations }} defaultLocale='fr'>
        <Home />
      </LocalizationProvider>
    </View>
  );
}

export default App;
