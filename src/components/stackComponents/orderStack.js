import { createStackNavigator } from "@react-navigation/stack";
import OrderListPage from "../../screens/orderListPage";
import OrderInfoPage from "../../screens/orderInfoPage";


const Stack = createStackNavigator();

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";


export default function OrderStack() {
  return (
          <Stack.Navigator>
              <Stack.Screen name="OrderList" component={OrderListPage} options={{headerShown : false}}/>
              <Stack.Screen name="OrderInfoPage" component={OrderInfoPage} options={{ title: 'Order Details' }} />
          </Stack.Navigator>
  );
}
