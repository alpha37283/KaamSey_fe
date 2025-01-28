import React, { useState} from 'react';
import { View, Text, Image, useWindowDimensions, ScrollView, ActivityIndicator} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import EarningCard from '../components/earningCard';
import IncomeCard from '../components/incomeCard';
import TotalOrder from '../components/totalOrderCard';
import NumsOfActiveOrders from '../components/orderCard';
import ActiveOrders from '../components/activeOrders';
import userDataStore from '../../asyncStorage/userDataStore';
import text from '../styles/textStyles';
import colors from '../styles/colors/colors';

import fetchSeller from '../../apis/fetchSeller';

const {fetchImage} = fetchSeller;
const {getData} = userDataStore;

function HomePage() {

  const [services, setServices] = useState(null);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { width, height } = useWindowDimensions();
  const [profileImage, setProfileImage] = useState('')

  useFocusEffect(
    React.useCallback(() => {
      let isMounted = true;
  
      const fetchData = async () => {
        try {
          const servicesData = await getData('services');
          const sellerData = await getData('seller');
  
          if (isMounted) {
            setServices(servicesData);
            setSeller(sellerData);
          }
        } catch (error) {
          console.error('An error occurred while fetching data:', error);
        } finally {
          if (isMounted) setLoading(false);
        }
      };
  
      const getImage = async () => {
        const image = await fetchImage();
        const imageBase64Uri = `data:${image.profileImage.contentType};base64,${image.profileImage.data}`;
        setProfileImage(imageBase64Uri);
      };
  
      getImage();
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, [])
  );

  const [fontsLoaded] = useFonts({
              'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
              'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
          });
          if (!fontsLoaded) {
              return null;
          }


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text>Loading...</Text>
      </View>
    );
  }


  if (!seller || !services) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[text.mediumExtraBold, { color: colors.error }]}>
          Unable to load data. Please check your connection or try again.
        </Text>
      </View>
    );
  }
  
  return (
    
    <ScrollView>
    <View >
      <Image source={require('../../assets/images/eclips4.png')} style={{ position: 'absolute', left: width * 0.5, top: 0, width: width * 0.6, height: height * 0.21,  }} />
    </View>
    <View style={{ marginTop: height * 0.05, paddingHorizontal: 20, marginTop : height * 0.055 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <View>
          <Text style={[text.mediumExtraBold,{ fontSize: width * 0.08,  color: '#000' }]}>{seller.name}</Text>
          <Text style={[text.mediumExtraBold,{ fontSize: width * 0.08, color: '#4CAF50', marginTop : width * -0.01 }]}>Welcome Back</Text>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: width * 0.17, width: width * 0.2, height: width * 0.085, justifyContent: 'center', alignItems: 'center' }}>
  {profileImage ? (
    <Image source={{ uri: profileImage }} style={{ width: width * 0.17, height: height * 0.085, borderRadius: width * 0.2 }} />
  ) : (
    <Image source={require('../../assets/icons/profileIcon.png')} style={{ width: width * 0.17, height: height * 0.085, borderRadius: width * 0.2 }} />
  )}
</View>

      </View>
    </View>
    <EarningCard totalIncome={seller.income.total}/>
          
    <View style={{flexDirection : 'row'}}>
      <IncomeCard monthlyIncome={seller.income.monthly}/> 
      <NumsOfActiveOrders activeOrders={seller.order.active}/>
    </View>
    <TotalOrder totalOrders={seller.order.total}/>

    <View style={{marginTop : height * 0.02}}>
      <Text style={[text.mediumExtraBold,{marginLeft : width * 0.05}]}>Active Orders</Text>
      <ActiveOrders data={services}/>
    </View>
</ScrollView>
  
  
  );
}


export default HomePage;
