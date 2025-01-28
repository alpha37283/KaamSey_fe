import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet,Keyboard, ScrollView, TouchableOpacity, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import text from '../styles/textStyles';
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import colors from '../styles/colors/colors';
import { TouchableWithoutFeedback } from 'react-native';
import userDataStore from '../../asyncStorage/userDataStore';
const {storeAsyncData,getData} = userDataStore;
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import patchSeller from '../../apis/patchSeller';
import BottomSelectProfile from '../components/bottomSheetForProfileSelection';
import * as ImagePicker from 'expo-image-picker';
const {uploadUserProfileSetting} = patchSeller;
import fetchSeller from '../../apis/fetchSeller';
const {fetchImage} = fetchSeller;




const {width, height} = Dimensions.get('window')




export default function UserProfileSetting() {



    const [seller, setSeller] = useState(null);
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [city, setCity] = useState('')
    const [profile, setProfile] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);



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
        setProfile(result.assets[0].uri); 
        }
    };

    


    const saveNewSeller = async () => {
        try {
            const updatedSeller = {
            ...seller, 
            name,
            bio,
            gender,
            contactNumber: contact,
            city,
            profilePicture: profile, 
            };
            
//            console.log('Updated seller is : ===================================> ', updatedSeller)
            await storeAsyncData('seller', updatedSeller); 
            setSeller(updatedSeller); 
        
            await uploadUserProfileSetting(updatedSeller); 
            alert('Profile saved successfully!');
        } catch (e) {
            console.error('Failed to save profile: ', e);
            alert('Failed to save profile. Please try again.');
        }
        };
                  
    

    useEffect(()=>{
        try{
            const getSeller = async () => {
                const seller = await getData('seller')
                if(seller){
                   // console.log(seller)
                    setSeller(seller);
                    setName(seller.name)
                    setBio(seller.bio)
                    setGender(seller.gender)
                    setContact(seller.contactNumber)
                    setCity(seller.city)
                    setProfile(seller.profileImage)
                    console.log(Object.keys(seller)
                )
                    
                }

            }
            getSeller();
        }
        catch(e)
        {
            console.log('An error occured while getting data : ', e)
        }


        const getImage = async () => {
        const image = await fetchImage();
        const imageBase64Uri = `data:${image.profileImage.contentType};base64,${image.profileImage.data}`
        setProfile(imageBase64Uri)
        await storeAsyncData('seller_image', image)
        }
        getImage()
        
    }, [])


const [fontsLoaded] = useFonts({
        'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
        'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }

  return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView>
     <View style={{flex : 1, backgroundColor : colors.fifth}}>
        <View style={{}}>
            <Image source={require('../../assets/images/eclips5.png')} style={{marginLeft : width * 0.35}}></Image>
            <View style={{position : 'absolute',alignItems : 'center', width : width * 0.7, marginLeft : width * 0.1}}>
                <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                      {profile ? (
                            <Image source={{ uri: profile }} style={{width : width * 0.25, height : height * 0.13, borderRadius : width * 0.15, marginTop : height * 0.12 }}/>
                        ) : (
                            <Image source={require('../../assets/icons/profileIcon.png')} style={{width : width * 0.2, height : height * 0.1, borderRadius : width * 0.15, marginTop : height * 0.12, resizeMode : 'contain'}}/>
                        )}
                </TouchableOpacity>
                <Text style={[text.mediumExtraBold,{marginTop : height * 0.015}]}>{name}</Text>
                   <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        >
                        <BottomSelectProfile onClose={() => setModalVisible(false)} onPressProfilePicker={pickImage} />
                    </Modal>
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
                        placeholder={name}
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
                        placeholder={bio}
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
                                placeholder={contact}
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
                                placeholder={gender}
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
                        placeholder={city}
                        placeholderTextColor='black'
                        />
                </View>
            </View>

            <View style={{marginTop : height * 0.02, alignItems : 'center'}}>
        <TouchableOpacity style={[{width : width * 0.8, height : height * 0.06,  justifyContent:'center',}]} onPress={saveNewSeller}>
                    <LinearGradient
                    colors={[colors.primary, colors.secondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{height : height * 0.07, borderRadius: width * 0.1,justifyContent: 'center', alignItems: 'center',  }}
                    >
                    <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Save Profile</Text>
                    </LinearGradient>
            </TouchableOpacity>
     </View>
    </View>
    </ScrollView>
   </TouchableWithoutFeedback>
  );
}


const styles =  StyleSheet.create({

    inputField : {
        padding : width * 0.04,borderBottomColor: 'black', backgroundColor : 'white', elevation : 10, borderRadius : width * 0.03, marginTop : height * 0.01, fontSize : width * 0.04,
    }
})