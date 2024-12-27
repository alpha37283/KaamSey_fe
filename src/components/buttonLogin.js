import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import colors from '../styles/colors/colors';

 function ButtonLogin() {

    const {width, height} = useWindowDimensions();

    return (
        <View style={styles.container}>
          <TouchableOpacity style={[styles.button,{width : width * 0.8, height : height * 0.06, borderRadius : width * 0.1}]} >
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradient: {
      flex: 1, 
      borderRadius: 10,
      justifyContent: 'center', 
      alignItems: 'center',  
    },
    buttonText: {
      color: '#ffffff', 
      fontSize: 16, 
      fontWeight: 'bold', 
      textAlign: 'center', 
    },
  });


export default ButtonLogin;