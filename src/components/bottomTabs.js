import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, useWindowDimensions, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import ChatStack from './stackComponents/chatStack';

import HomePage from '../screens/homePage';


import colors from '../styles/colors/colors';
import OrderStack from './stackComponents/orderStack';
import OrderListPage from '../screens/orderListPage';
import SettingPage from '../screens/settingPage';

import SettingStack from './stackComponents/settingStack';

const Tab = createBottomTabNavigator();


function CustomTabBar({ state, descriptors, navigation }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ padding: 15, position: 'relative', }}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientCard}
      />
      <View
        style={[ styles.whiteCard, { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',  }, ]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={[styles.tabButton,{ width: width * 0.14, height: height * 0.07,}]}>
              {options.tabBarIcon({ focused: isFocused })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function BottomTabsBar() {

  const {width, height } = useWindowDimensions();
  return (

      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require('../../assets/icons/homeIcon.png')} 
              style={{ width: width * 0.09, height: height * 0.09, tintColor: focused ? '#4ADE80' : 'black', resizeMode : "contain" }} />
            ),
          }}/>
        <Tab.Screen name="Chat" component={ChatStack} 
          options={{ 
            tabBarIcon: ({ focused }) => ( 
              <Image source={require('../../assets/icons/chatIcon.png')} 
              style={{ width: width * 0.09, height: height * 0.09, tintColor: focused ? '#4ADE80' : 'black', resizeMode : "contain"}}/>
            ),
          }}
        />
        <Tab.Screen name="Order" component={OrderStack} 
            options={{ 
              tabBarIcon: ({ focused }) => ( 
                <Image source={require('../../assets/icons/icnOrder.png')} 
                style={{ width: width * 0.1, height: height * 0.1, tintColor: focused ? '#4ADE80' : 'black', resizeMode : "contain"}}/>
              ),
            }}
        />
        <Tab.Screen name='SettingStack' component={SettingStack} 
            options={{
              tabBarIcon : ({focused}) => (
                <Image source={require('../../assets/icons/icnSetting.png')}
                style={{ width: width * 0.1, height: height * 0.1, tintColor: focused ? '#4ADE80' : 'black', resizeMode : "contain"}}/>
              )
            }}
        />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  gradientCard: {
    
    position: 'absolute',
    left: 24,
    right: 8,
    top: 24,
    bottom: 8,
    borderRadius: 90,
    transform: [{ scale: 0.98 }],
    borderWidth: 1,
    borderColor: 'black',
  },
  whiteCard: {

    backgroundColor: 'white',
    borderRadius: 90,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
