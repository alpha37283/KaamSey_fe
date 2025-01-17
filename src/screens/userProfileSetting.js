import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet,Keyboard} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import text from '../styles/textStyles';
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import colors from '../styles/colors/colors';
import { TouchableWithoutFeedback } from 'react-native';


const {width, height} = Dimensions.get('window')

export default function UserProfileSetting() {

const [name, setName] = useState('')
const [bio, setBio] = useState('')
const [gender, setGender] = useState('')
const [contact, setContact] = useState('')
const [city, setCity] = useState('')
const nme = 'Ali'
const bi = 'Hello I am Ali and i am the best'
const gndr = 'Male'
const cntct = '+92 31858392'
const cty = 'Islamabad, Pakistan'

const [fontsLoaded] = useFonts({
        'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
        'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }

  return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={{flex : 1, backgroundColor : colors.fifth}}>
        <View style={{}}>
            <Image source={require('../../assets/images/eclips5.png')} style={{marginLeft : width * 0.35}}></Image>
            <View style={{position : 'absolute',alignItems : 'center', width : width * 0.7, marginLeft : width * 0.1}}>
                <Image source={require('../../assets/images/kami.jpg')} style={{width : width * 0.25, height : height * 0.13, borderRadius : width * 0.15, marginTop : height * 0.12 }}/>
                <Text style={[text.mediumExtraBold,{marginTop : height * 0.015}]}>Muhammad Atif</Text>
            </View>
            
        </View>
        <View style={{padding : width * 0.03}}>
                <View style={{marginTop : height * 0.1}}>
                    <Text style={[text.small,{marginLeft : width * 0.04}]}>Full Name</Text>
                    <TextInput
                        style={[text.small,styles.inputField, {height : height * 0.07, }]}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        blurOnSubmit={false}
                        value={name}
                        onChangeText={setName}
                        placeholder={nme}
                        placeholderTextColor='black'
                        />
                </View>
                <View style={{marginTop : height * 0.02}}>
                    <Text style={[text.smallBold,{marginLeft : width * 0.04}]}>Bio</Text>
                    <TextInput
                        style={[text.small,styles.inputField,{height : height * 0.13,}]}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        blurOnSubmit={false}
                        value={bio}
                        onChangeText={setBio}
                        placeholder={bi}
                        placeholderTextColor='black'
                        multiline={true}
                        numberOfLines={4}
                        />
                </View>
                <View style={{flexDirection : 'row', marginTop : height * 0.02}}>
                    <View style={{width : width * 0.5}}>
                            <Text style={[text.small,{marginLeft : width * 0.04,}]}>Contact</Text>
                            <TextInput
                                style={[text.small,styles.inputField, {height : height * 0.07, width : width * 0.4}]}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                blurOnSubmit={false}
                                value={contact}
                                onChangeText={setContact}
                                placeholder={cntct}
                                placeholderTextColor='black'
                                />
                    </View>
                    <View>
                            <Text style={[text.small,{marginLeft : width * 0.04}]}>Gender</Text>
                            <TextInput
                                style={[text.small,styles.inputField, {height : height * 0.07, width : width * 0.4 }]}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                blurOnSubmit={false}
                                value={gender}
                                onChangeText={setGender}
                                placeholder={gndr}
                                placeholderTextColor='black'
                                />
                    </View>
                </View>

                <View style={{marginTop : height * 0.02}}>
                    <Text style={[text.small,{marginLeft : width * 0.04}]}>City</Text>
                    <TextInput
                        style={[text.small,styles.inputField, {height : height * 0.07, }]}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        blurOnSubmit={false}
                        value={city}
                        onChangeText={setCity}
                        placeholder={cty}
                        placeholderTextColor='black'
                        />
                </View>
            </View>
    </View>
   </TouchableWithoutFeedback>
  );
}


const styles =  StyleSheet.create({

    inputField : {
        padding : width * 0.04,borderBottomColor: 'black', backgroundColor : 'white', elevation : 10, borderRadius : width * 0.03, marginTop : height * 0.01, fontSize : width * 0.04,
    }
})