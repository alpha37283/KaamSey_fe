import React from 'react';
import { StyleSheet } from 'react-native';

import NavigationMain from './src/navigation/navigationMain';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationMain/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
