import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image, TouchableOpacity, Pressable,TextInput, Touchable, SafeAreaView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Divider } from 'react-native-elements';
import text from '../styles/textStyles';
import apiConnections from '../../apis/apiConnections';

import {useFonts} from 'expo-font';   

import colors from '../styles/colors/colors';



const {loginSeller} = apiConnections;


export default function LoginPage({navigation}) {

    const {width, height} = useWindowDimensions();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        let isSuccess = false; 
        isSuccess = await loginSeller(email, password, navigation);
        if (isSuccess) {
            navigation.navigate('BottomTabsBar');
        }
    };


    const [fontsLoaded] = useFonts({
        'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
    <View style={{flex: 1, justifyContent : 'flex-start'}} >
        <View style={{alignItems: 'center', flexDirection : 'row', justifyContent: 'center'}} >
            <Image source={require('../../assets/images/logoMainSmall.png')} />
        </View>


        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: height * 0.05}} >
            <Text style={text.mediumBold}>Login To KaamSay</Text>    
            <Text style={[text.small, {color: '#797C7B', marginTop: height * 0.02}]}>Welcome back! Sign in using your social</Text>
            <Text style={[text.small, {color: '#797C7B'}]}>account or email to continue us</Text>    
        </View>


        <View style={{flexDirection: 'row', justifyContent : 'center', marginTop: height * 0.02}} >
          <View style={{flexDirection: 'row', marginTop: height * 0.02}} >
                <View style={{width:width*0.12, height: height*0.06, borderColor:'black', borderWidth: 1, borderRadius: width * 0.1, alignItems : 'center', justifyContent: 'center', right : width * 0.05}} >
                        <Image source={require('../../assets/icons/google.png')} style={{width : height * 0.035, height : height * 0.035}} /> 
                </View>
                <View style={{width:width*0.12, height: height*0.06, borderColor:'black', borderWidth: 1, borderRadius: width * 0.1, alignItems : 'center', justifyContent: 'center', left : width * 0.05}} >
                        <Image source={require('../../assets/icons/apple.png')} style={{width : height * 0.035, height : height * 0.035}} /> 
                </View>
          </View>
        </View>



        <View style={{width : width * 0.85, flexDirection : 'row', marginTop: height * 0.03, alignItems : 'center', justifyContent : 'space-evenly', alignSelf : 'center'}} >
            <Divider width={1} color="#CDD1D0" style={{ width: width * 0.35, alignSelf: 'center' }} />
            <Text style={[text.small]}> OR </Text>
            <Divider width={1} color="#CDD1D0" style={{ width: width * 0.35, alignSelf: 'center' }} />
        </View>



        <View style={{marginTop : width * 0.04, width : width * 0.85, alignContent : 'center', justifyContent : 'center', alignSelf : 'center'}} >
            <Text style={[text.small]}>Your Email</Text>
                <TextInput
                    style={[{ height : 35,borderBottomWidth: 0.8,borderBottomColor: 'black' }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    blurOnSubmit={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={[text.small,{marginTop: height * 0.02}]}>Password</Text>
                <TextInput
                    style={[{height : 35, borderBottomWidth: 0.8,borderBottomColor: 'black' ,paddingHorizontal: 1  }]}
                    secureTextEntry
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={{alignItems : 'flex-end', marginTop : height * 0.01}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
                        <Text>Don't have an Account?</Text>
                    </TouchableOpacity>
                </View>

        </View>

        



        <View style={{marginTop: width * 0.4, justifyContent : 'center', alignItems : 'center'}} >
            <TouchableOpacity style={[{width : width * 0.8, height : height * 0.06, borderRadius : width * 0.1, justifyContent:'center',}]} 
                onPress={handleLogin}>
                <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{flex: 1, borderRadius: 10,justifyContent: 'center', alignItems: 'center',  }}
                >
                <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:height * 0.01, alignItems : 'center'}} onPress={() => navigation.navigate('SignUp')}>
                <Text style={[text.small]}>Forget Password</Text>
            </TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
</TouchableWithoutFeedback>


  );
}


