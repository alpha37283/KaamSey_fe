import React, { useEffect } from 'react';
import { View, Text, Image, useWindowDimensions, ScrollView, ActivityIndicator} from 'react-native';
import { useState } from 'react';
import EarningCard from '../components/earningCard';
import IncomeCard from '../components/incomeCard';
import TotalOrder from '../components/totalOrderCard';
import text from '../styles/textStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors/colors';
import NumsOfActiveOrders from '../components/orderCard';
import ActiveOrders from '../components/activeOrders';
import userDataStore from '../../asyncStorage/userDataStore';

const {getData} = userDataStore;



function HomePage() {

  const [services, setServices] = useState(null);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { width, height } = useWindowDimensions();
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const servicesData = await getData('services');
        const sellerData = await getData('seller');

        if (isMounted) {
          setServices(servicesData);
          setSeller(sellerData);
          const imageBase64Uri = `data:${sellerData.profileImage.contentType};base64,${sellerData.profileImage.data}`
          setProfileImage(imageBase64Uri)
      
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
        <View style={{ backgroundColor : '#ffffff', borderRadius : width * 0.2, width : width * 0.12, height : width * 0.12, justifyContent : 'center', alignItems : 'center' }}>
          <Image source={{uri : profileImage}} style={{ width: width * 0.14, height: height * 0.07, borderRadius : width * 0.2}} />
        </View>
      </View>
    </View>
    <EarningCard totalIncome={seller.income.total}/>
          
    <View style={{flexDirection : 'row'}}>
      <IncomeCard monthlyIncome={seller.income.monthly}/> 
      <NumsOfActiveOrders activeOrders={seller.order.active}/>
    </View>
    <TotalOrder totalOrders={seller.order.total}/>

    <View>
      <Text style={[text.mediumExtraBold,{marginLeft : width * 0.05}]}>Active Orders</Text>
      <ActiveOrders data={services}/>
     

    </View>
    
      
    </ScrollView>
  
  
  );
}


export default HomePage;
