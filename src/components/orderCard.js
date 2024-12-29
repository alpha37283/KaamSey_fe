import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import colors from '../styles/colors/colors';

import text from '../styles/textStyles';

const NumsOfActiveOrders = () => {

    const {width, height} = useWindowDimensions();

    const [fontsLoaded] = useFonts({
            'PEB': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    });
        if (!fontsLoaded) {
            return null;
        }

    
  return (


    <View style={{padding : 18, position : 'relative', width : width * 0.5 }}>
      <LinearGradient colors={[colors.primary, colors.secondary]}  start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={styles.gradientCard}
      />
      <View style={[styles.whiteCard,]}>
        <View style={{zIndex: 1, flexDirection : 'row', }}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginBottom: 16,}}>  
            <View style={{ alignItems: 'center', padding : 15, justifyContent : 'center', marginLeft : width * 0.03 }}>
               <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Image source={require('../../assets/icons/logoOrders.png')} style={{width : width * 0.25,  height : height * 0.12, }}/>
               </View>
               <View style={{alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <Text style={[text.smallExtraBold,{fontSize : width * 0.05 , marginTop : height * 0.01}]}>13</Text>
                    <Text style={[text.small,{fontSize: 16, color: '#666',letterSpacing : 1, marginTop : height * 0.025}]}>Active Orders</Text>
               </View>
            </View>
          </View>
        </View>
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
    padding: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },


});

export default NumsOfActiveOrders;