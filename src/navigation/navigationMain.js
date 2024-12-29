import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splashScr';
import Onboard from '../screens/onboardingScr';
import LoginPage from '../screens/loginPage';
import SignUp from '../screens/signUpPage';
import HomePage from '../screens/homePage';
import FetchData from '../../apis/checking';

const Stack = createStackNavigator();

export default function NavigationMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}  
      /> 
      


      </Stack.Navigator>
    </NavigationContainer>
  );
}


 