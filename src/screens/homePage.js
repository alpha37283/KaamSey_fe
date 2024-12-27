import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import EarningCard from '../components/earningCard';
import IncomeCard from '../components/incomeCard';
import ActiveOrders from '../components/orderCard';
import TotalOrder from '../components/totalOrderCard';
import text from '../styles/textStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors/colors';


function HomePage() {

  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff',justifyContent : 'center'}}>
    <View >
      <Image source={require('../../assets/images/eclips4.png')} style={{ position: 'absolute', left: width * 0.5, top: 0, width: width * 0.5, height: height * 0.21,  }} />
    </View>
    <View style={{ marginTop: height * 0.05, paddingHorizontal: 20, marginTop : height * 0.01 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <View>
          <Text style={[text.mediumExtraBold,{ fontSize: width * 0.08,  color: '#000' }]}>Atif,</Text>
          <Text style={[text.mediumExtraBold,{ fontSize: width * 0.08, color: '#4CAF50', marginTop : width * 0.001 }]}>Welcome Back</Text>
        </View>
        <View style={{ backgroundColor : '#ffffff', borderRadius : width * 0.2, width : width * 0.12, height : width * 0.12, justifyContent : 'center', alignItems : 'center' }}>
          <Image source={require('../../assets/icons/icnSearch.png')} style={{ width: width * 0.08, height: width * 0.08 }} />
        </View>
      </View>
    </View>
  
    {/* Earnings Card */}
    
      <EarningCard />
      
      
<View style={{flexDirection : 'row'}}>
  <IncomeCard/> 
  <ActiveOrders/>
</View>
<TotalOrder/>
    
      
    
  </SafeAreaView>
  
  );
}


export default HomePage;
