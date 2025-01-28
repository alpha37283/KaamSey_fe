import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ServiceContext } from './context/createServiceContext';
import { useContext } from 'react';

import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

import text from '../styles/textStyles';
import colors from '../styles/colors/colors';
import SelectCategory from '../components/selectCategory';
import BottomSelectProfile from '../components/bottomSheetForProfileSelection';

const { width, height } = Dimensions.get('window');

export default function CreateService({navigation}) {

    const {
        title,
        setTitle,
        desc,
        setDesc,
        category,
        setCategory,
        tags,
        setTags,
        hours,
        setHours,
        workers,
        setWorkers,
        price,
        setPrice,
        img,
        setImg,
      } = useContext(ServiceContext);

    const [modalVisible, setModalVisible] = useState(false)
    
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
                    <View style={{ padding: width * 0.03 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <TouchableOpacity style={{ width: width * 0.09, height: height * 0.045, alignItems: 'center', justifyContent: 'center', borderRadius: width * 0.05, borderColor: 'black', borderWidth: 2}} onPress={()=>{navigation.navigate('ManageServices')}}>
                                <Image source={require('../../assets/icons/back.png')} style={{ width: width * 0.07, height: height * 0.04 }} />
                            </TouchableOpacity>
                            <Text style={[text.largeExtraBold, { marginLeft: width * 0.11 }]}>Create a Service</Text>
                        </View>

                        <View>
                            <View style={{ marginTop: height * 0.02}}>
                                <Text style={[text.small, { marginLeft: width * 0.04 }]}>Title</Text>
                                <TextInput style={[text.small, styles.inputField, { height: height * 0.07 }]} value={title} onChangeText={setTitle} placeholder="Enter Title of the service" />
                            </View>

                            <View style={{ marginTop: height * 0.02 }}>
                                <Text style={[text.smallBold, { marginLeft: width * 0.04 }]}>Description</Text>
                                <TextInput style={[text.small, styles.inputField, { height: height * 0.13 }]} value={desc} onChangeText={setDesc} placeholder="Add suitable Description" multiline={true} numberOfLines={4} />
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: height * 0.02 }}>
                                <View>
                                    <Text style={[text.smallBold, { marginBottom: height * 0.01, marginLeft : width * 0.03 }]}>Select Category</Text>
                                    <SelectCategory setCategory={setCategory} />
                                </View>
                                <View>
                                    <Text style={[text.smallBold, { marginLeft: width * 0.04}]}>Tags</Text>
                                    <TextInput style={{ backgroundColor: 'white', width: width * 0.6, height: height * 0.07, padding: width * 0.03, borderRadius: width * 0.03, fontSize: width * 0.045, marginLeft: width * 0.02, borderWidth: 1, borderColor: colors.quad, marginTop: height * 0.01 }} placeholder="Enter 3 Tags for service" onChangeText={setTags} />
                                </View>
                            </View>

                            <View style={{ marginTop: height * 0.02 }}>
                                <Text style={[text.small, { marginLeft: width * 0.04 }]}>How many hours you can provide the service?</Text>
                                <TextInput style={[text.small, styles.inputField, { height: height * 0.07 }]} value={hours} onChangeText={setHours} placeholder="Enter Hours" keyboardType="number-pad" />
                            </View>

                            <View style={{ marginTop: height * 0.02 }}>
                                <Text style={[text.small, { marginLeft: width * 0.04 }]}>How many workers do you have?</Text>
                                <TextInput style={[text.small, styles.inputField, { height: height * 0.07 }]} value={workers} onChangeText={setWorkers} placeholder="Number of workers" keyboardType="number-pad" />
                            </View>

                            <View style={{ marginTop: height * 0.02 }}>
                                <Text style={[text.small, { marginLeft: width * 0.04 }]}>Set a price</Text>
                                <TextInput style={[text.small, styles.inputField, { height: height * 0.07 }]} value={price} onChangeText={setPrice} placeholder="RS." keyboardType="number-pad" />
                            </View>
                        </View>


                        <View style={{marginTop : height * 0.02}}>
                          <View style={{alignItems : 'center'}}>
                            <Text style={[text.largeExtraBold]}>Add image on gig</Text>
                             <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                                <View style={{alignItems : 'center', justifyContent : 'space-evenly', height : height * 0.19}}>
                                    <View style={{alignItems : 'center', justifyContent : 'center',backgroundColor : 'white', width : width * 0.2, height : height * 0.1, borderRadius : width * 0.1, elevation: 10}}>
                                        {img ? (<Image source={{uri : img}} style={{ width: width * 0.09, height: height * 0.04, resizeMode: 'contain' }} />      ) 
                                        : (<Image source={require('../../assets/icons/icnAddImage.png')} style={{ width: width * 0.09, height: height * 0.04, resizeMode: 'contain' }} />      )}
                                        
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <Text style={[text.smallBold]}>Select Image</Text>
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


                        <View style={{marginTop : height * 0.02, alignItems : 'center'}}>
                            <TouchableOpacity style={[{width : width * 0.85, height : height * 0.06,  justifyContent:'center',}]} onPress={()=>{navigation.navigate('ServiceOverview')}}>
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
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    inputField: { padding: width * 0.04, borderBottomColor: 'black', backgroundColor: 'white', elevation: 10, borderRadius: width * 0.03, marginTop: height * 0.01, fontSize: width * 0.04 }
});
