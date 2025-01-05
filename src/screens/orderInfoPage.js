import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../styles/colors/colors';
import text from '../styles/textStyles';
import { Divider } from 'react-native-elements';


import {format} from 'date-fns';


const {width, height} = Dimensions.get('window');

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const formattedDate = format(date, "dd-MMM-yyyy"); 
  return formattedDate;
};

const formatTime = (isoDate) => {
  const date = new Date(isoDate);
  const formattedTime = format(date, "hh:mm a"); 
  return formattedTime;
};

export default function OrderInfoPage({ route, navigation }) {
  const { order } = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.tertiary}}>
      <View style={{padding: width * 0.05, marginTop : height * 0.02}}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: height * 0.03}}>Orders</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('OrderList')}}>
                <Image source={require('../../assets/icons/back.png')} style={{width : width * 0.07, height : height * 0.04, tintColor : 'white'}}/>
              </TouchableOpacity>
      </View>
      <View style={{backgroundColor : 'white',flex : 1, borderTopLeftRadius : width * 0.1, borderTopRightRadius : width * 0.1}}>
          <View style={{flexDirection : 'row', alignItems : 'center', padding : width * 0.05, marginLeft : width * 0.02, marginTop : height * 0.02}}>
            <Image source={require('../../assets/images/kami.jpg')} style={{width : width * 0.2, height : height * 0.1, borderRadius : width * 0.2}}/>
            <Text style={[text.largeBold, { marginLeft : width * 0.03}]}>{order.buyerName}</Text>
          </View>
          <Divider width={1} color="#CDD1D0" style={{ width: width * 0.88, alignSelf: 'center' }} />


          <View style={{padding : width * 0.05}}>
            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start'}}>
              <View style={{ height : height * 0.06}}>
                 <Image source={require('../../assets/icons/icnLocation.png')} style={{width : width * 0.04, height : height * 0.03}}/>
              </View>
              <View style={{marginLeft : width * 0.01}}>
                  <Text style={[text.medium,{color : colors.quad}]}>Address:</Text>
                  <Text style={[text.small,{color : colors.quad}]}>{order.address}</Text>
              </View>
            </View>

            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start', marginTop : height * 0.01}}>
              <View style={{ height : height * 0.055}}>
                 <Image source={require('../../assets/icons/icnBox.png')} style={{width : width * 0.04, height : height * 0.02}}/>
              </View>
              <View style={{marginLeft : width * 0.01}}>
                  <Text style={[text.medium,{color : colors.quad}]}>Order Status: </Text>
                  <Text style={[text.small,{color : colors.quad}]}>{order.status}</Text>
              </View>
            </View>

            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start', marginTop : height * 0.01}}>
              <View style={{ height : height * 0.08}}>
                 <Image source={require('../../assets/icons/icnWatch.png')} style={{width : width * 0.04, height : height * 0.02}}/>
              </View>
              <View style={{marginLeft : width * 0.01}}>
                  <Text style={[text.medium,{color : colors.quad}]}>Order Created On: </Text>
                  <Text style={[text.small,{color : colors.quad}]}>Date: {formatDate(order.requestCreatedAt)}</Text>
                  <Text style={[text.small,{color : colors.quad}]}>Time: {formatTime(order.requestCreatedAt)}</Text>
              </View>
            </View>

            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start', marginTop : height * 0.01}}>
              <View style={{ height : height * 0.08}}>
                 <Image source={require('../../assets/icons/icnWatch.png')} style={{width : width * 0.04, height : height * 0.02}}/>
              </View>
              <View style={{marginLeft : width * 0.01}}>
                  <Text style={[text.medium,{color : colors.quad}]}>Order Delivery On: </Text>
                  <Text style={[text.small,{color : colors.quad}]}>Date: {formatDate(order.scheduledTime)}</Text>
                  <Text style={[text.small,{color : colors.quad}]}>Time: {formatTime(order.scheduledTime)}</Text>
              </View>
            </View>

            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start', marginTop : height * 0.01}}>
              <View style={{ height : height * 0.055}}>
                 <Image source={require('../../assets/icons/icnPhone.png')} style={{width : width * 0.04, height : height * 0.02}}/>
              </View>
              <View style={{marginLeft : width * 0.01}}>
                  <Text style={[text.medium,{color : colors.quad}]}>Contact: </Text>
                  <Text style={[text.small,{color : colors.quad}]}>{order.contactNumber}</Text>
              </View>
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
}
