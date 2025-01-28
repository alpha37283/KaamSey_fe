import React from 'react';
import { View, Text, Touchable, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';

import text from '../styles/textStyles';
import NavigationActivePaused from '../navigation/navigationActivePaused';

const {width, height} = Dimensions.get('window')



export default function ManageServices({navigation}) {
  const [fontsLoaded] = useFonts({
    'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
    'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex : 1, padding : width * 0.02, backgroundColor : 'white'}}>
        <View style={{flexDirection : 'row', height : height * 0.12, alignItems : 'center', backgroundColor : 'white'}}>
            <TouchableOpacity style={{}} onPress={()=>{navigation.navigate('Settings')}}>
                <View style={{width : width * 0.09, height : height * 0.045, alignItems : 'center', justifyContent : 'center',borderRadius : width * 0.05, borderColor : 'black', borderWidth : 2}}>
                  <Image source={require('../../assets/icons/back.png')} style={{width : width * 0.07, height : height * 0.04}}></Image>
                </View>
            </TouchableOpacity>
              <Text style={[text.largeExtraBold,{marginLeft : width * 0.25,}]}>Services</Text>
        </View>
        <NavigationActivePaused/>
    </SafeAreaView>
  );
}
