import React from 'react';
import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';
import EarningCard from '../components/earningCard';
import IncomeCard from '../components/incomeCard';
import TotalOrder from '../components/totalOrderCard';
import text from '../styles/textStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors/colors';
import NumsOfActiveOrders from '../components/orderCard';
import ActiveOrders from '../components/activeOrders';

function HomePage() {

  const activeOrdersData = [
    {
      serName : 'Plumber',
      price : 45,
      address : 'I8/4 Islamabad',
      rating : 4.7,
      std : 7380,
    },
    {
      serName : 'Electrician',
      price : 45,
      address : 'I8/4 Islamabad',
      rating : 4.7,
      std : 7380,
    },
    {
      serName : 'Painter',
      price : 45,
      address : 'I8/4 Islamabad',
      rating : 4.7,
      std : 7380,
    },
    {
      serName : 'Plumber',
      price : 45,
      address : 'I8/4 Islamabad',
      rating : 4.7,
      std : 7380,
    },
  ]
  const {width, height} = useWindowDimensions();
  return (
    
    <ScrollView>
    <View >
      <Image source={require('../../assets/images/eclips4.png')} style={{ position: 'absolute', left: width * 0.5, top: 0, width: width * 0.6, height: height * 0.21,  }} />
    </View>
    <View style={{ marginTop: height * 0.05, paddingHorizontal: 20, marginTop : height * 0.04 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <View>
          <Text style={[text.mediumExtraBold,{ fontSize: width * 0.08,  color: '#000' }]}>Atif,</Text>
          <Text style={[text.mediumExtraBold,{ fontSize: width * 0.08, color: '#4CAF50', marginTop : width * -0.01 }]}>Welcome Back</Text>
        </View>
        <View style={{ backgroundColor : '#ffffff', borderRadius : width * 0.2, width : width * 0.12, height : width * 0.12, justifyContent : 'center', alignItems : 'center' }}>
          <Image source={require('../../assets/icons/icnSearch.png')} style={{ width: width * 0.08, height: width * 0.08 }} />
        </View>
      </View>
    </View>
    <EarningCard />
          
    <View style={{flexDirection : 'row'}}>
      <IncomeCard/> 
      <NumsOfActiveOrders/>
    </View>
    <TotalOrder/>

    <View>
      <Text style={[text.mediumExtraBold,{marginLeft : width * 0.05}]}>Active Orders</Text>
      <ActiveOrders data = {activeOrdersData}/>
     

    </View>
    
      
    </ScrollView>
  
  
  );
}


export default HomePage;
