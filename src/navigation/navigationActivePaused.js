import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import colors from '../styles/colors/colors';


const Tab = createMaterialTopTabNavigator();

import ActiveServices from '../screens/activeServices';
import PausedServices from '../screens/pausedServices';
import text from '../styles/textStyles';
import { color } from 'react-native-elements/dist/helpers';

const {width, height} = Dimensions.get('window')

export default function NavigationActivePaused() {
  return (
    
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'white'},
          tabBarIndicatorStyle: { backgroundColor: 'black' },
          tabBarActiveTintColor: colors.tertiary,
          tabBarLabelStyle : [text.smallExtraBold],
          tabBarInactiveTintColor: '#8E8E93',
          swipeEnabled: true,
          
        }}
      >
        <Tab.Screen name="Active" component={ActiveServices} />
        <Tab.Screen name="Paused" component={PausedServices} />
      </Tab.Navigator>
    
  );
}


