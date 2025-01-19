import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectCategory from '../components/selectCategory';
import text from '../styles/textStyles';
import colors from '../styles/colors/colors';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native';

import BottomSelectProfile from '../components/bottomSheetForProfileSelection';
import { ServiceContext } from './context/createServiceContext';
import { useContext } from 'react';

const { width, height } = Dimensions.get('window');

export default function CreateServiceOverview({navigation}) {
    const { title, desc, category, tags, hours, workers, price, img } = useContext(ServiceContext);
    


    
   const [fontsLoaded] = useFonts({
                'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
                'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
            });
            if (!fontsLoaded) {
                return null;
            }



      const pickImage = async () => {

      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
          alert('Permission to access the gallery is required!');
          return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true, 
          quality: 1, 
      });
  
      
      if (!result.canceled) {
          console.log('Setted profile picture')
          setImg(result.assets[0].uri); 
          }
      };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.fifth }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={{ }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start',padding: width * 0.03,  }}>
                            <TouchableOpacity style={{ width: width * 0.09, height: height * 0.045, alignItems: 'center', justifyContent: 'center', borderRadius: width * 0.05, borderColor: 'black', borderWidth: 2}} onPress={()=>{navigation.navigate('ManageServices')}}>
                                <Image source={require('../../assets/icons/back.png')} style={{ width: width * 0.07, height: height * 0.04 }} />
                            </TouchableOpacity>
                            <Text style={[text.largeExtraBold, { marginLeft: width * 0.11 }]}>Service Overview</Text>
                        </View>

                        <View style={[{ height : height * 0.43,backgroundColor : 'white' }]}>
                            <View style={{backgroundColor : 'white'}}>
                                <Text style={[text.mediumBold, {padding: width * 0.03 }]}>Image Selected for the Service</Text>
                                {img ? (<Image source={{ uri: img }} style={{ width: width * 1, height: height * 0.35,}} />) : 
                                (<Text style={[text.small, { textAlign: 'center', marginTop: height * 0.02 }]}>No image selected. Please upload an image.</Text>)}
                            </View>
                        </View>

                        <View>
                            <Text style={[text.mediumBold, {padding: width * 0.03, backgroundColor : 'white', flexDirection : 'row', justifyContent : 'space-between', marginTop : height * 0.02}]}>{title}</Text>
                        </View>
                        <View style={{padding: width * 0.03, backgroundColor : 'white', flexDirection : 'row', justifyContent : 'space-between', marginTop : height * 0.02}}>
                                    <View style={[{backgroundColor : colors.fifth, width : width * 0.3, height : height * 0.05, alignItems : 'center', justifyContent : 'center', borderRadius : width * 0.02, elevation : 1}]}>
                                        <Text style={[text.mediumBold]}>{category}</Text>
                                    </View>
                                    <View style={[{width : width * 0.3, height : height * 0.05, alignItems : 'center', justifyContent : 'center',}]}>
                                        <Text style={[text.small]}>RS {price}</Text>
                                    </View>
                        </View>

                        <View style={{padding: width * 0.03, backgroundColor : 'white', flexDirection : 'row', justifyContent : 'space-between', marginTop : height * 0.02}}>
                                    <View style={[{backgroundColor : colors.fifth, width : width * 0.3, height : height * 0.05, alignItems : 'center', justifyContent : 'center', borderRadius : width * 0.02, elevation : 1}]}>
                                        <Text style={[text.mediumBold]}>{tags}</Text>
                                    </View>
                                    <View style={[{backgroundColor : colors.fifth, width : width * 0.3, height : height * 0.05, alignItems : 'center', justifyContent : 'center', borderRadius : width * 0.02, elevation : 1}]}>
                                        <Text style={[text.mediumBold]}>{tags}</Text>
                                    </View>
                                    <View style={[{backgroundColor : colors.fifth, width : width * 0.3, height : height * 0.05, alignItems : 'center', justifyContent : 'center', borderRadius : width * 0.02, elevation : 1}]}>
                                        <Text style={[text.mediumBold]}>{tags}</Text>
                                    </View>
                        </View>


                        <View style={{padding: width * 0.03, backgroundColor : 'white', flexDirection : 'row', justifyContent : 'space-between', marginTop : height * 0.02}}>
                            <View style={[{ alignItems : 'center', justifyContent : 'center', borderRadius : width * 0.02, }]}>
                                <Text style={[text.mediumBold]}>{desc}</Text>
                            </View>
                        </View>

                        <View style={{marginTop : height * 0.02, alignItems : 'center'}}>
                            <TouchableOpacity style={[{width : width * 0.85, height : height * 0.06,  justifyContent:'center',}]} onPress={()=>{console.log('Publish')}}>
                                  <LinearGradient
                                  colors={[colors.primary, colors.secondary]}
                                  start={{ x: 0, y: 0 }}
                                  end={{ x: 1, y: 0 }}
                                  style={{height : height * 0.06, borderRadius: width * 0.1,justifyContent: 'center', alignItems: 'center',  }}
                                  >
                                  <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Publish</Text>
                                  </LinearGradient>
                            </TouchableOpacity>
                      </View>
                </View>
              </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
