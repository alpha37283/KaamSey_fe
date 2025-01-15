import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import text from '../styles/textStyles';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors/colors';
import { useFonts } from 'expo-font';
const {width, height} = Dimensions.get('window')

export default function ActiveServices() {

  const [fontsLoaded] = useFonts({
      'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
      'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
    });
    if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={{flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'white'}}>
          <View style={{alignItems : 'center'}}>
          <View style={{backgroundColor : colors.fifth, width : width * 0.2, height: height * 0.1, alignItems : 'center', justifyContent : 'center', borderRadius : width * 0.1, elevation : 10}}>
                  <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{height : height * 0.05, width : width * 0.1,borderRadius: width * 0.1,justifyContent: 'center', alignItems: 'center',  }}
                            >
                            <Image source={require('../../assets/icons/icnClose.png')} style={{width : width * 0.06, height : height * 0.03, tintColor : 'white'}}></Image>
                  </LinearGradient>
              </View>
              <View style={{marginTop : height * 0.02,alignItems : 'center'}}>
                  <Text style={[text.mediumExtraBold]}>You have no services yet!</Text>
                  <Text style={[text.small,{color : colors.quad}]}>Create services here and start selling</Text>
              </View>
          </View>
     <View style={{marginTop : height * 0.02}}>
        <TouchableOpacity style={[{width : width * 0.5, height : height * 0.06,  justifyContent:'center',}]} >
                    <LinearGradient
                    colors={[colors.primary, colors.secondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{height : height * 0.06, borderRadius: width * 0.1,justifyContent: 'center', alignItems: 'center',  }}
                    >
                    <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Create Services</Text>
                    </LinearGradient>
            </TouchableOpacity>
     </View>
     </View>
  );
}
