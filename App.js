import React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash from './src/screens/splashScr';
import ButtonLogin from './src/components/buttonLogin';
import LoginPage from './src/screens/loginPage';
import SignUp from './src/screens/signUpPage';
import Onboard from './src/screens/onboardingScr';
import NavigationMain from './src/navigation/navigationMain';
import OrderCard from './src/screens/homePage';
import EarningCard from './src/components/earningCard';
import TotalOrder from './src/components/totalOrderCard';
import IncomeCard from './src/components/incomeCard';
import ActiveOrders from './src/components/orderCard';
import HomePage from './src/screens/homePage';

function App() {
  return (
    
  <HomePage/>
    
    
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