import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Dimensions, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { BlurView } from 'expo-blur';
import text from '../styles/textStyles';
import colors from '../styles/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window')

export default function BottomSelectProfile({ onClose }) {

  return (
    <TouchableWithoutFeedback onPress={onClose}>
        <SafeAreaView style={{flex: 1, justifyContent: 'flex-end',}}>
                <BlurView intensity={40} tint="dark" style={{...StyleSheet.absoluteFillObject, }}/>

                <View style={[{height : height * 0.3, justifyContent : 'space-between', backgroundColor: 'white', borderTopLeftRadius: width * 0.08, borderTopRightRadius: width * 0.08, padding: width * 0.05}]}>
                    <View style={{flexDirection : 'row'}}>
                        <TouchableOpacity onPress={onClose}>
                            <Image source={require('../../assets/icons/icnClose.png')} style={{tintColor:'black', width : width * 0.06, height : height * 0.04}}></Image>
                        </TouchableOpacity>
                        <Text style={[text.medium, {marginLeft : width * 0.17}]}>Select Profile Picture</Text>
                    </View>
                
                    <View style={{justifyContent : 'space-evenly', flex : 1}}>
                        <TouchableOpacity  onPress={onClose}>
                            <View style={{flexDirection : 'row', padding : width * 0.01, alignItems : 'center'}}>
                                <View style={{alignItems : 'center', justifyContent : 'center',width: width * 0.12, height : height * 0.06, borderRadius : width * 0.1,marginRight : width * 0.03,  backgroundColor : colors.primary}}>
                                    <Image source={require('../../assets/icons/icnCamera.png')} style={{width : width * 0.06, height : height * 0.03,tintColor : 'black'}}></Image>
                                </View>
                                <Text style={[text.medium]}>Take Photo</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onClose}>
                            <View style={{flexDirection : 'row', padding : width * 0.01, alignItems : 'center'}}>
                                <View style={{alignItems : 'center', justifyContent : 'center',width: width * 0.12, height : height * 0.06, borderRadius : width * 0.1,marginRight : width * 0.03,  backgroundColor : colors.primary}}>
                                    <Image source={require('../../assets/icons/icnMediaFile.png')} style={{width : width * 0.06, height : height * 0.03,tintColor : 'black'}}></Image>
                                </View>
                                <Text style={[text.medium]}>Select from Gallery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>

  );
}
