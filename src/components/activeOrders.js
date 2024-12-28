import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import colors from '../styles/colors/colors';
import { Divider } from 'react-native-elements';


import text from '../styles/textStyles';
import { color } from 'react-native-elements/dist/helpers';

const ActiveOrders = ({data}) => {

    const {width, height} = useWindowDimensions();

     const [fontsLoaded] = useFonts({
            'PEB': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        });
        if (!fontsLoaded) {
            return null;
        }

        if(!data || data.length === 0)
        {
          console.log('No data found !!!')
          return ;
        }
        else
        {
          console.log(data);
        }

    
  return (
    <View style={{padding : 18, position : 'relative'}}>
    <LinearGradient colors={[colors.primary, colors.secondary]}  start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={styles.gradientCard}
    />
   

      <View style={[styles.whiteCard, { }]}>
              {data.map((order, index) => {
                return (
                    <View key={index} style={{ justifyContent : 'space-around'}}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                            <Text style={text.mediumBold}>
                              {order.serName}
                            </Text>
                            <Text style={[text.mediumBold, {color : colors.primary}]}>
                              ${order.price}
                            </Text>
                        </View>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', marginTop : height * 0.01}}>
                          <View>
                            <Text>
                              {order.address}
                            </Text>
                          </View>
                          <View style={{flexDirection : 'row'}}>
                            <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center',  width : width * 0.1 }} >
                              <Image source={require('../../assets/icons/icnStar.png')} style={{width : width * 0.04, height : height * 0.02, }}/>
                              <Text>{order.rating}</Text>
                            </View>
                            <View style={{flexDirection : 'row'}}>
                              <Text> | </Text>
                              <Text>{order.std}</Text>
                            </View>
                          </View>
                        </View>
                      <Divider width={1} color="#CDD1D0" style={{ width: width * 0.85, alignSelf: 'center', marginTop : height * 0.01}} />  
                  </View>  
                )
              })}
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  gradientCard: {
    position: 'absolute',
    left: 24,
    right: 8,
    top: 24,
    bottom: 8,
    borderRadius: 16,
    transform: [{scale: 0.98}],
    borderWidth : 1,
    borderColor : 'black',
  },
  whiteCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth : 1,
    borderColor : 'black',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },


});

export default ActiveOrders;

/**
 * in this page we need to fetch data from 
 *  Users: total earnings, total orders and those that are active, 
 *  Reviews: just the ratings corresponding orders, address, type of service, prices
 */