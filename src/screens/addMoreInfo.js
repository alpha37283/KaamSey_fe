import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import colors from '../styles/colors/colors'
import text from '../styles/textStyles';
import AddContact from '../components/selectListCountryCode';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

const {width, height } = Dimensions.get('window');
import BottomSelectProfile from '../components/bottomSheetForProfileSelection';

import uploadMoreInfo from '../../apis/uploadMoreInfo';
const {handleUpload} = uploadMoreInfo;

export default function AddMoreInfo() {

    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const [selectCode, setSelectCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [profile, setProfile] = useState(null);

    const [fontsLoaded] = useFonts({
            'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
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
                setProfile(result.assets[0].uri); 
                }
            };

        const printInfo = () => {
            console.log('Number => ',number);
            console.log('Location => ', location)
            console.log('Code => ', selectCode)
            console.log('Profile => ', profile)
        }

        const triggerUpload = async () => {
            if(location === '' || number === '' || profile === null)
            {
                printInfo();
                return ;
            }
            
            console.log('Triggered upload..')
            await handleUpload(profile, number, location);
            
        }
    
  return (
    <SafeAreaView style={{flex : 1}}>
        <View style={{padding : width * 0.05}}>
           <View>
                <View>
                    <View>
                        <Image source={require('../../assets/icons/back.png')} style={{tintColor:'black', width : width * 0.06, height : height * 0.04}}></Image>
                    </View>
                        <View style={{marginTop : height * 0.01}}>
                            <Text style={text.mediumBold}>Add More Info</Text>
                        </View>
                        <View style={{alignItems : 'center', justifyContent : 'center',}}>
                            <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                                <View style={{alignItems : 'center', justifyContent : 'space-evenly', height : height * 0.19}}>
                                <View style={{alignItems : 'center', justifyContent : 'center',backgroundColor : 'white', width : width * 0.2, height : height * 0.1, borderRadius : width * 0.1, elevation: 10}}>
                                          {profile ? (
                                                <Image source={{ uri: profile }} style={{ width: width * 0.2, height: height * 0.1,resizeMode: 'contain', borderRadius : width * 0.1,}} />
                                            ) : (
                                                <Image source={require('../../assets/icons/icnAddImage.png')} style={{ width: width * 0.09, height: height * 0.04, resizeMode: 'contain' }} />
                                            )}
                                    </View>

                                    <Text style={text.smallBold}>Profile Photo</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                            >
                            <BottomSelectProfile onClose={() => setModalVisible(false)} onPressProfilePicker={pickImage} />
                        </Modal>
                </View>

                <View style={{ alignItems : 'flex-start'}}>
                    <View style={{marginBottom : height * 0.01}}>
                        <Text style={[text.smallBold,{}]}>Mobile Number</Text>
                    </View>
                    <View style={{flexDirection : 'row'}}>  
                        <AddContact setSelectCode={setSelectCode}></AddContact>
                        <TextInput placeholder='123-456-789' onChangeText={(newText)=>{setNumber(newText)}} style={[{ width: width * 0.6, height: height * 0.07,padding : width * 0.03, borderRadius : width * 0.03, fontSize: width * 0.045, marginLeft : width * 0.02, borderWidth : 1, borderColor : colors.quad}]} keyboardType='number-pad' /> 
                    </View>
                </View>

                <View style={{height : height * 0.11, justifyContent: 'space-between', marginTop : height * 0.03}}>
                    <Text style={text.mediumBold}>Confirm You Location</Text>
                    <View style={{ borderWidth : 1, borderColor : colors.quad, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', paddingHorizontal : width * 0.02, borderRadius : width * 0.03}}>
                        <TextInput placeholder='St #, House #, City' onChangeText={(newText)=>{setLocation(newText)}} style={[{ width: width * 0.6, height: height * 0.07, borderRadius : width * 0.03, fontSize: width * 0.045}]} keyboardType='default' /> 
                        <Image source={require('../../assets/icons/icnSendLoc.png')} style={{width : width * 0.07, height : height * 0.03}}></Image>
                    </View>
                </View>

                <View style={{marginTop : height * 0.03, flexDirection : 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection : 'row'}}>
                        <View style={{width : width * 0.1, height : height * 0.05, borderRadius : width * 0.1, borderWidth : 1, backgroundColor : '#F3F3F3', alignItems : 'center', justifyContent: 'center', elevation : 5}}>
                            <Image source={require('../../assets/icons/icnLocation.png')} style={{width : width * 0.06, height : height * 0.03,tintColor : 'black'}}></Image> 
                        </View>
                        <View style={{marginLeft : width * 0.02}}>
                            <Text style={text.mediumBold}>Current Location</Text>
                            <Text style={[text.small,{color : colors.quad}]}>Not Available</Text>
                        </View>
                        
                    </View>
                    <View style={{width : width * 0.08, height : height * 0.04, borderRadius : width * 0.05, borderColor : 'black', borderWidth : 3, alignItems : 'center', justifyContent : 'center'}}>
                        <View style={{width : width * 0.04, height : height * 0.02, borderRadius : width * 0.05, backgroundColor : 'black'}}></View>
                    </View>
                </View> 

                <View style={{width : width * 0.9, height : height * 0.08, backgroundColor : '#F3F3F9', borderRadius : width * 0.03, marginTop : height * 0.03, flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-start', padding : width * 0.03}}>
                    <Image source={require('../../assets/icons/icnInfo.png')} style={{width : width * 0.05, height : height * 0.025}} />
                    <View style={{marginLeft : width * 0.03}}>
                        <Text>We’ll show you cost estimates and </Text>
                        <Text>trending services in your neighbourhood. </Text>
                    </View>
                </View>
           </View>

            <View style={{justifyContent: 'center', alignItems : 'center', marginTop: height * 0.1}}>
                <TouchableOpacity style={[{width : width * 0.8, height : height * 0.06, borderRadius : width * 0.1, justifyContent:'center',}]} onPress={triggerUpload} >
                        <LinearGradient
                        colors={[colors.primary, colors.secondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{flex: 1, borderRadius: 10,justifyContent: 'center', alignItems: 'center',  }}
                        >
                        <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Continue</Text>
                        </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
}
