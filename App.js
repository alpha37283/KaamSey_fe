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
import HomePage from './src/screens/homePage';
import ActiveOrders from './src/components/activeOrders';
import FetchData from './apis/checking';
import BottomTabsBar from './src/components/bottomTabs'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderListPage from './src/screens/orderListPage';
import OrderStack from './src/components/stackComponents/orderStack';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import ChatStack from './src/components/stackComponents/chatStack';
import MessagePage from './src/screens/messagePage';
import ChatList from './src/screens/chatListPage';
import AddMoreInfo from './src/screens/addMoreInfo';
import ImagePicker from './src/components/imagePicker';
import SettingPage from './src/screens/settingPage';

import NavigationActivePaused from './src/navigation/navigationActivePaused';
import ManageServices from './src/screens/ManageServices';


const Stack = createNativeStackNavigator();


function App() {
  return (
    
<NavigationContainer>
  <BottomTabsBar/>
</NavigationContainer>
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
