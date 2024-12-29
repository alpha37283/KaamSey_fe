import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import fetchSeller from './fetchSeller';
const {getSellerAndStore, getServicesAndStore} = fetchSeller;
import userDataStore from '../asyncStorage/userDataStore';
const {getData} = userDataStore;

const getSeller = async () => {
  const sellerData = await getData('seller');
  console.log(sellerData);
}

const getServices = async () => {
  const serData = await getData('services');
  console.log(serData);
}

export default function FetchData() {
  return (
    <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={getServices}
        activeOpacity={0.8}
      >
        <Text style={{ color: 'white' }}>Fetch Services</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={getSeller}
        activeOpacity={0.8}
      >
        <Text style={{ color: 'white' }}>Seller</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: 200,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
