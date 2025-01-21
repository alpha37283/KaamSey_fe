import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import LottieView from 'lottie-react-native';
import text from '../styles/textStyles';

function Items({ item }) {
  const { width, height } = useWindowDimensions(); // Get dynamic dimensions

   const [fontsLoaded] = useFonts({
          'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
          'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
      });
      if (!fontsLoaded) {
          return null;
      }

  return (
    <View style={[styles.container, { width, padding : width * 0.05,}]}>
      <LottieView
        source={item.animation} 
        autoPlay
        loop={true}
        style={{width : width * 0.9, height : height * 0.25,}}
      />
      <Text style={[text.mediumExtraBold, { fontSize: width * 0.05, color : 'black' }]}>{item.text}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default Items;