import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image, TouchableOpacity, Pressable,TextInput, Touchable, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Divider } from 'react-native-elements';
import text from '../styles/textStyles';

import {useFonts} from 'expo-font';   

import colors from '../styles/colors/colors';

import apiConnections from '../../apis/apiConnections';

const {signUpSeller} = apiConnections;

export default function SignUp({navigation}) {
    const {width, height} = useWindowDimensions();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignUp = () => {
        console.log(name, email, password, confirmPassword);

        if(password != confirmPassword)
        {
            console.log('Password not matched');
            return ;
        }

        signUpSeller(name, email, password, navigation)
            
        }

    


    const [fontsLoaded] = useFonts({
        'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
  return (
<SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
    <View style={{flex: 1, justifyContent : 'flex-start'}} >
        <View style={{alignItems: 'center', flexDirection : 'row', justifyContent: 'center'}} >
            <Image source={require('../../assets/images/logoMainSmall.png')} />
        </View>


        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: height * 0.05}} >
            <Text style={text.mediumBold}>Sign Up with Email</Text>    
            <Text style={[text.small, {color: '#797C7B', marginTop: height * 0.02}]}>Get local services today by signing up for </Text>
            <Text style={[text.small, {color: '#797C7B'}]}>our chat app!</Text>    
        </View>

        <View style={{marginTop : width * 0.15, width : width * 0.85, alignContent : 'center', justifyContent : 'center', alignSelf : 'center'}} >
                <Text style={[text.small]}>Your Name</Text>
                <TextInput
                    style={[{ height : 40,borderBottomWidth: 0.8,borderBottomColor: 'black' }]}
                    keyboardType="additional-name"
                    autoCapitalize="none"
                    value={name}
                    onChangeText={setName}

                />
                <Text style={[text.small, {marginTop : height * 0.02}]}>Your Email</Text>
                <TextInput
                    style={[{ height : 40,borderBottomWidth: 0.8,borderBottomColor: 'black' }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={[text.small, {marginTop : height * 0.02}]}>Set Password</Text>
                <TextInput
                    style={[{height : 40, borderBottomWidth: 0.8,borderBottomColor: 'black' ,paddingHorizontal: 1  }]}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={[text.small, {marginTop : height * 0.02}]}>Confirm Password</Text>
                <TextInput
                    style={[{height : 40, borderBottomWidth: 0.8,borderBottomColor: 'black' ,paddingHorizontal: 1  }]}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <View style={{alignItems : 'flex-end', marginTop : height * 0.01}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('LoginPage')}}>
                        <Text>Already have an Account?</Text>
                    </TouchableOpacity>
                </View>
        </View>



        <View style={{marginTop: width * 0.4, justifyContent : 'center', alignItems : 'center'}} >
            <TouchableOpacity style={[{width : width * 0.8, height : height * 0.06, borderRadius : width * 0.1, justifyContent:'center',}]} 
                onPress={handleSignUp}>
                <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{flex: 1, borderRadius: 10,justifyContent: 'center', alignItems: 'center',  }}
                >
                <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Sign Up</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>


    </View>
</SafeAreaView>

  );
}
