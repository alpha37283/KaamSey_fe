import React from 'react';
import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors/colors';

const { width, height} = useWindowDimensions();

const Tab = createBottomTabNavigator();

const DummyScreen = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <MaterialCommunityIcons name={name} size={48} color="#4ADE80" />
  </View>
);

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ padding: 15, position: 'relative' }}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientCard}
      />
      <View style={[styles.whiteCard, { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const iconName = options.tabBarIcon || 'home-outline';

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
            <View
              key={route.key}
              style={[
                styles.tabButton,
                route.name === 'Home' && styles.homeButton,
                isFocused && (route.name === 'Home' ? styles.activeTabHome : styles.activeTab),
              ]}
            >
              <MaterialCommunityIcons
                name={iconName}
                size={route.name === 'Home' ? 32 : 24}
                color={isFocused ? '#FFFFFF' : '#4ADE80'}
                onPress={onPress}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Wallet" component={() => <DummyScreen name="currency-usd" />} options={{ tabBarIcon: 'currency-usd' }} />
        <Tab.Screen name="Chat" component={() => <DummyScreen name="chat-outline" />} options={{ tabBarIcon: 'chat-outline' }} />
        <Tab.Screen name="Home" component={() => <DummyScreen name="home-outline" />} options={{ tabBarIcon: 'home-outline' }} />
        <Tab.Screen name="Card" component={() => <DummyScreen name="wallet-outline" />} options={{ tabBarIcon: 'wallet-outline' }} />
        <Tab.Screen name="Profile" component={() => <DummyScreen name="account-outline" />} options={{ tabBarIcon: 'account-outline' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  homeButton: {
    width: 60,
    height: 50,
    borderRadius: 30,
    transform: [{ translateY: -20 }],
   
  },
  activeTab: {
    backgroundColor: '#4ADE80',
  },
  activeTabHome: {
    backgroundColor: '#4ADE80',
  },
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
});

