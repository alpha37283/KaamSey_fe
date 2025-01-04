import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/homePage';
import ChatList from '../screens/chatListPage';
import MessagePage from '../screens/messagePage';

import colors from '../styles/colors/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatPage" component={ChatList} />
      <Stack.Screen name="ChatDetail" component={MessagePage} />
    </Stack.Navigator>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ padding: 15, position: 'relative' }}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientCard}
      />
      <View
        style={[ styles.whiteCard, { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }, ]}>
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
    padding: 15,
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
