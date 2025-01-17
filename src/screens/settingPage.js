import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../styles/colors/colors';
import text from '../styles/textStyles';
import { Divider } from 'react-native-elements';
import { useFonts } from 'expo-font';
import userDataStore from '../../asyncStorage/userDataStore';
const {getData} = userDataStore;

const {width, height} = Dimensions.get('window')
export default function SettingPage({navigation}) {

    const [name, setName] = useState('')
    const [profle, setProfile] = useState(null)
    const [bio, setBio] = useState('')

    useEffect(()=>{

        const getNameAndImage = async () => {
          try{
            const sellerData = await getData('seller');
            setName(sellerData.name);
            setBio(sellerData.bio)
            console.log('name is',name)
            const imageBase64Uri = `data:${sellerData.profileImage.contentType};base64,${sellerData.profileImage.data}`
            setProfile(imageBase64Uri)
          }
          catch(e)
          {
            console.log('Error while setting name and image on settings')
          }
        }

        getNameAndImage();

    }, [])

      const [fontsLoaded] = useFonts({
            'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
            'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
        });
        if (!fontsLoaded) {
            return null;
        }
    

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.tertiary}}>
    <View style={{padding: width * 0.05,  alignItems : 'center', justifyContent : 'center',height : height * 0.15, marginTop : height * 0.02}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: height * 0.03}}>Settings</Text>
    </View>
    <View style={{backgroundColor : 'white',flex : 1, borderTopLeftRadius : width * 0.1, borderTopRightRadius : width * 0.1, padding : width * 0.07}}>
        <TouchableOpacity style={{flexDirection : 'row', alignItems : 'center'}} onPress={()=>{navigation.navigate('ProfileSetting')}}>
            <View style={{width : width * 0.18, height : height * 0.09, borderRadius : width * 0.1,elevation : 20}}>
                <Image source={{uri : profle}} style={{width : width * 0.18, height : height * 0.09, borderRadius : width * 0.1}}/>
            </View>
            <View style={{marginLeft : width * 0.05}}>
                <Text style={[text.largeExtraBold]}>{name}</Text>
                <Text style={[text.small, { fontSize: width * 0.035 }]}>{(bio?.length === 0 || !bio) ? 'No Bio' : bio}</Text>
            </View>
        </TouchableOpacity>
        <Divider width={1} color="#CDD1D0" style={{ width: width * 0.9, marginTop : height * 0.02}} />

        <TouchableOpacity style={{flexDirection : 'row',  marginTop : height * 0.03, alignItems : 'center', justifyContent : 'flex-start'}} onPress={()=>{navigation.navigate('ManageServices')}}>
            <View style={{backgroundColor : colors.primary,width : width * 0.1, height : height * 0.05,  borderRadius : width * 0.05, alignItems : 'center', justifyContent : 'center', elevation : 20}}>
                <Image source={require('../../assets/icons/icnKey.png')} style={{width : width * 0.08, height : height * 0.04,  borderRadius : width * 0.03, }}/>
            </View>
            <View style={{alignItems : 'flex-start', marginLeft : width * 0.03}}>
                <Text style={[text.medium]}>Manager Services</Text>
                <Text style={[text.small, {color : colors.quad, marginTop : height * -0.005}]}>Create, edit, or remove gig</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection : 'row',  marginTop : height * 0.03, alignItems : 'center', justifyContent : 'flex-start'}} >
            <View style={{backgroundColor : colors.primary,width : width * 0.1, height : height * 0.05,  borderRadius : width * 0.05, alignItems : 'center', justifyContent : 'center', elevation : 20}}>
                <Image source={require('../../assets/icons/icnBell.png')} style={{width : width * 0.07, height : height * 0.035,  borderRadius : width * 0.03, }}/>
            </View>
            <View style={{alignItems : 'flex-start', marginLeft : width * 0.03}}>
                <Text style={[text.medium]}>Notifications</Text>
                <Text style={[text.small, {color : colors.quad, marginTop : height * -0.005}]}>Manage notification, and others</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection : 'row',  marginTop : height * 0.03, alignItems : 'center', justifyContent : 'flex-start'}}>
            <View style={{backgroundColor : colors.primary,width : width * 0.1, height : height * 0.05,  borderRadius : width * 0.05, alignItems : 'center', justifyContent : 'center', elevation : 20}}>
                <Image source={require('../../assets/icons/icnAvailability.png')} style={{width : width * 0.06, height : height * 0.03,  borderRadius : width * 0.03, }}/>
            </View>
            <View style={{alignItems : 'flex-start', marginLeft : width * 0.03}}>
                <Text style={[text.medium]}>Availability</Text>
                <Text style={[text.small, {color : colors.quad, marginTop : height * -0.005}]}>Set availablity, Online or Offline</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection : 'row',  marginTop : height * 0.03, alignItems : 'center', justifyContent : 'flex-start'}}>
            <View style={{backgroundColor : colors.primary,width : width * 0.1, height : height * 0.05,  borderRadius : width * 0.05, alignItems : 'center', justifyContent : 'center', elevation : 20}}>
                <Image source={require('../../assets/icons/icnInvite.png')} style={{width : width * 0.07, height : height * 0.035,  borderRadius : width * 0.03, }}/>
            </View>
            <View style={{alignItems : 'flex-start', marginLeft : width * 0.03}}>
                <Text style={[text.medium]}>Invite Friends</Text>
                <Text style={[text.small, {color : colors.quad, marginTop : height * -0.005}]}>Invite others to use services and app</Text>
            </View>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
