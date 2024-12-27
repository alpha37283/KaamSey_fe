import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import LottieView from 'lottie-react-native';

function Items({ item }) {
  const { width, height } = useWindowDimensions(); // Get dynamic dimensions

  const [fontsLoaded] = useFonts({
    'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, { width }]}>
      <LottieView
        source={item.animation} 
        autoPlay
        loop={true}
        style={styles.animation}
      />
      <View style={{ flex: 0.6 }}>
        <Text style={[styles.text, { paddingHorizontal: width * 0.16, fontSize: width * 0.05, color : 'black' }]}>{item.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
  animation: {
    width: 300,
    height: 300,
  },
});

export default Items;