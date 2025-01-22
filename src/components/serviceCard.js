import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors/colors';
import text from '../styles/textStyles';
import { Divider } from 'react-native-elements';

const {width, height} = Dimensions.get('window')

export default function ServiceCard() {
    return (
    <View style={{alignItems : 'center', justifyContent : 'center', marginTop : height * 0.1}}>
        <View style={{ width : width * 0.9, height : height * 0.25, borderColor : colors.quad, borderWidth : 1, borderRadius : width * 0.02}}>
            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', paddingHorizontal : width * 0.03, paddingTop : width * 0.03}}>
                <Text style={{...text.mediumExtraBold}}>Home Cleaning</Text>
                <Text style={{...text.small, color : colors.quad}}>Active</Text>
            </View>
            <Divider width={1} color="#CDD1D0" style={{ width: width * 0.85, alignSelf: 'center', marginTop : height * 0.005}} />
            <View style={{marginTop : height * 0.01, paddingHorizontal : width * 0.02}}>
               
                <View style={{flexDirection : 'row', alignItems : 'center', marginTop : height * 0.008}}>
                    <Image source={require('../../assets/icons/icnDollar.png')} style={{width : width * 0.06, height : height * 0.03}}></Image>
                    <Text style={{...text.small, marginLeft : width * 0.02}}>Rs 1200</Text>
                </View>
                <View style={{flexDirection : 'row', alignItems : 'center', marginTop : height * 0.008}}>
                    <Image source={require('../../assets/icons/icnPeople.png')} style={{width : width * 0.06, height : height * 0.03}}></Image>
                    <Text style={{...text.small, marginLeft : width * 0.02}}>2 Workers</Text>
                </View>
                <View style={{flexDirection : 'row', alignItems : 'center', marginTop : height * 0.008}}>
                    <Image source={require('../../assets/icons/icnWatchFilled.png')} style={{width : width * 0.06, height : height * 0.03}}></Image>
                    <Text style={{...text.small, marginLeft : width * 0.02}}>Service For 5 Hours</Text>
                </View>
            </View>
            <View style={{paddingVertical : height * 0.005, paddingHorizontal : width * 0.02, alignItems : 'flex-end', marginRight : width * 0.01}}>
                <TouchableOpacity style={{width : width * 0.3, height : height * 0.045, borderColor : colors.quad, borderWidth : 2, borderRadius : width * 0.05, alignItems : 'center', justifyContent : 'center' }}>
                    <Text style={{...text.small}}>Edit Your Gig</Text>
                </TouchableOpacity>
            </View>
        </View>
     </View>
  );
}
