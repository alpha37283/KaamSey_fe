import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimension, Image, Dimensions, useWindowDimensions } from 'react-native';
import OrderCard from '../components/orderCardMain';
import text from '../styles/textStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors/colors';
import { TextInput } from 'react-native';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import userDataStore from '../../asyncStorage/userDataStore';
const {getData} = userDataStore;

const { width, height } = Dimensions.get('window'); 

export default function OrderListPage({ navigation }) {

  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [activeTab, setActiveTab] = useState('Pending'); 

  
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const servicesData = await getData('services');
//        console.log(servicesData);

        if (isMounted) {
          setServices(servicesData);
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);

// Loading state
if (loading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text>Loading...</Text>
    </View>
  );
}

// Error state if no data is available
if (!services) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[text.mediumExtraBold, { color: colors.error }]}>
        Unable to load data. Please check your connection or try again.
      </Text>
    </View>
  );
}



const filterOrders = services.filter((service) => service.status === activeTab)
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.tertiary}}>
    <View style={{padding: width * 0.05,  alignItems : 'center', justifyContent : 'center',height : height * 0.15, marginTop : height * 0.02}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: height * 0.03}}>Orders</Text>
    </View>
      
      <View style={{backgroundColor : 'white',flex : 1, borderTopLeftRadius : width * 0.1, borderTopRightRadius : width * 0.1,}}>
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

        
          <FlatList data={filterOrders} keyExtractor={(item) => item._id} 
          renderItem={({ item }) => (
              <OrderCard name={item.buyerName} description={item.jobDescription} price={item.price} status={item.status}
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


{/* <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 25, padding: 8}}>
<Image source={require('../../assets/icons/icnSearch.png')} style={{width : width * 0.07, height : height * 0.04, tintColor : 'white'}}/>
<TextInput placeholder="Search" plsaceholderTextColor="white" style={{padding : width * 0.03}}/>
</View> */}