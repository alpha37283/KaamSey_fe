import React, { useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Divider } from 'react-native-elements';
import { useFonts } from 'expo-font';
import colors from '../styles/colors/colors';
import text from '../styles/textStyles';

const { width, height } = Dimensions.get('window');

const SwitchComp = ({ enabled, setEnabled }) => {
    const toggleSwitch = () => setEnabled(prevState => !prevState);

    return (
        <Switch
            trackColor={{ false: '#767577', true: colors.tertiary }}
            thumbColor={enabled ? 'white' : colors.fifth}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={enabled}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], alignSelf: 'flex-end' }}
        />
    );
};

export default function NotificationSetting({ navigation }) {

    
    const [msgNotificEnable, setMsgNotificEnable] = useState(false);
    const [ratingRem, setRatingRem] = useState(false);
    const [pAndT, setPAndT] = useState(false);
    const [accountNotific, setAccountNotific] = useState(false)

    const [fontsLoaded] = useFonts({
        'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
        'PEB': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    });
    if (!fontsLoaded) return null;


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.fifth }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ padding: width * 0.03 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop : height * 0.03}}>
                        <TouchableOpacity
                            style={{ width: width * 0.09, height: height * 0.045, alignItems: 'center', justifyContent: 'center', borderRadius: width * 0.05, borderColor: 'black', borderWidth: 2 }}
                            onPress={() => navigation.navigate('Settings')}>
                            <Image source={require('../../assets/icons/back.png')} style={{ width: width * 0.07, height: height * 0.04 }} />
                        </TouchableOpacity>
                        <Text style={{ ...text.largeExtraBold, marginLeft: width * 0.15 }}>Notifications</Text>
                    </View>

                    <View style={{marginTop : height * 0.02}}>
                        <Text style={{ ...text.small, color : colors.quad}}>Get push notifications about</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: width * 0.02, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ ...text.mediumBold }}>Inbox Messages</Text>
                            <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>Receive notifications when a person responds.</Text>
                        </View>
                        <SwitchComp enabled={msgNotificEnable} setEnabled={setMsgNotificEnable} />
                    </View>
                    <Divider width={1} color="#CDD1D0" style={{ width: width * 1, alignSelf: 'center' }} />

                    <View style={{ flexDirection: 'row', padding: width * 0.02, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ ...text.mediumBold }}>Rating Reminders</Text>
                            <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>Receive reminders to rate your experiences.</Text>
                        </View>
                        <SwitchComp enabled={ratingRem} setEnabled={setRatingRem} />
                    </View>
                    <Divider width={1} color="#CDD1D0" style={{ width: width * 1, alignSelf: 'center' }} />


                    <View style={{ flexDirection: 'row', padding: width * 0.02, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ ...text.mediumBold }}>Promotions and Tips</Text>
                            <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>There are discounts, coupons and tips you</Text>
                            <Text style={{ ...text.small, color: colors.quad, }}>might like.</Text>
                        </View>
                        <SwitchComp enabled={pAndT} setEnabled={setPAndT} />
                    </View>
                    <Divider width={1} color="#CDD1D0" style={{ width: width * 1, alignSelf: 'center' }} />


                    <View style={{ flexDirection: 'row', padding: width * 0.02, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ ...text.mediumBold }}>Account</Text>
                            <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>We have updates about your account</Text>
                            <Text style={{ ...text.small, color: colors.quad, }}>and security matters.</Text>
                        </View>
                        <SwitchComp enabled={accountNotific} setEnabled={setAccountNotific} />
                    </View>
                    <Divider width={1} color="#CDD1D0" style={{ width: width * 1, alignSelf: 'center' }} />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
