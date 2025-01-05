import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimension, Image, useWindowDimensions, Dimensions } from 'react-native';
import OrderCard from '../components/orderCardMain';
import text from '../styles/textStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors/colors';
import { TextInput } from 'react-native';

const { width, height } = Dimensions.get('window'); 


const mockOrders = [
  {
    id: '1',
    name: 'Kamran Wahab',
    description: 'Locally based trusted driver for booking.',
    price: '$12',
    status: 'Pending',
  },
  {
    id: '2',
    name: 'John Doe',
    description: 'Reliable package delivery service.',
    price: '$15',
    status: 'Completed',
  },
  {
    id: '3',
    name: 'Alice Smith',
    description: 'Cancellation and returns service.',
    price: '$10',
    status: 'Cancelled',
  },
  
];

export default function OrderListPage({ navigation }) {
  const [activeTab, setActiveTab] = useState('Pending'); 
  
  const filteredOrders = mockOrders.filter((order) => order.status === activeTab);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.tertiary}}>
      <View style={{padding: width * 0.05, marginTop : height * 0.02}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: height * 0.03}}>Orders</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 25, padding: 8}}>
          <Image source={require('../../assets/icons/icnSearch.png')} style={{width : width * 0.07, height : height * 0.04, tintColor : 'white'}}/>
          <TextInput placeholder="Search" placeholderTextColor="white" style={{padding : width * 0.03}}/>
        </View>
      </View>
      
      <View style={{backgroundColor : 'white',flex : 1, borderTopLeftRadius : width * 0.1, borderTopRightRadius : width * 0.1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop : width * 0.09, paddingHorizontal: width * 0.02}}>
            {['Pending', 'Completed', 'Cancelled'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && {backgroundColor : colors.primary}]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[text.smallBold, activeTab === tab && [text.smallBold,{color : 'white'}]]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

        
          <FlatList data={filteredOrders} keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
              <OrderCard name={item.name} description={item.description} price={item.price} status={item.status} 
              onPress={() => navigation.navigate('OrderInfoPage', { order: item })}/>
            )}
          />
     </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: width * 0.025,
    marginHorizontal: width * 0.02,
    borderRadius: width * 0.07,
    backgroundColor: '#e0e0e0',
  },

});


// the most optimal code 