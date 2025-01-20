import React, { useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Switch, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import colors from '../styles/colors/colors';
import text from '../styles/textStyles';
import Calendar from '../components/Calendar';
import { Divider } from 'react-native-elements';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


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

const { width, height } = Dimensions.get('window');

export default function AvailabilitySetting({ navigation }) {
  const [calVisible, setCalVisible] = useState(false);
  const [dateType, setDateType] = useState(''); // 'start' or 'end'
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [msg, setMsg] = useState('')
  

  const [availability, setAvailability] = useState(false)
  const [allBuyerContact, setAllBuyerContact] = useState(false)

  const [fontsLoaded] = useFonts({
    'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
    'PEB': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
  });
  if (!fontsLoaded) return null;

  const handleDateChange = (date) => {
    if (dateType === 'start') setStartDate(date);
    if (dateType === 'end') setEndDate(date);
  };

  const handleCloseCalendar = () => {
    setCalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.fifth }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: width * 0.03 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: height * 0.03 }}>
            <TouchableOpacity
              style={{
                width: width * 0.09, height: height * 0.045, alignItems: 'center', justifyContent: 'center',
                borderRadius: width * 0.05, borderColor: 'black', borderWidth: 2,
              }}
              onPress={() => navigation.navigate('Settings')}>
              <Image source={require('../../assets/icons/back.png')} style={{ width: width * 0.07, height: height * 0.04 }} />
            </TouchableOpacity>
            <Text style={{ ...text.largeExtraBold, marginLeft: width * 0.18 }}>Availability</Text>
          </View>

          <View style={{ marginTop: height * 0.02, alignItems: 'center' }}>
            <Text style={{ ...text.small, color: colors.quad }}>While unavailable, your Services are hidden and you</Text>
            <Text style={{ ...text.small, color: colors.quad }}>will not receive new orders. During this time you can</Text>
            <Text style={{ ...text.small, color: colors.quad }}>still message buyers with active orders.</Text>
          </View>

          <View style={{ marginTop: height * 0.02, alignItems: 'center' }}>
            <Text style={{ ...text.mediumExtraBold }}>Choose Dates</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ ...text.smallExtraBold }}>Start</Text>
                <TouchableOpacity
                  style={{
                    width: width * 0.3, height: height * 0.06, borderColor: colors.quad, borderWidth: 1,
                    borderRadius: width * 0.03, alignItems: 'center', justifyContent: 'center',
                  }}
                  onPress={() => { setDateType('start'); setCalVisible(true); }}>
                  <Text style={{ ...text.small, color: colors.quad }}>{startDate || 'Select Date'}</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ ...text.smallExtraBold }}>End</Text>
                <TouchableOpacity
                  style={{
                    width: width * 0.3, height: height * 0.06, borderColor: colors.quad, borderWidth: 1,
                    borderRadius: width * 0.03, alignItems: 'center', justifyContent: 'center',
                  }}
                  onPress={() => { setDateType('end'); setCalVisible(true); }}>
                  <Text style={{ ...text.small, color: colors.quad }}>{endDate || 'Select Date'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginTop : height * 0.02}}>
                <View style={{ flexDirection: 'row', padding: width * 0.03, alignItems: 'center', justifyContent: 'space-between',}}>
                            <View>
                                <Text style={{ ...text.mediumBold }}>Availability</Text>
                                <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>Set your availability, for how much time offline?</Text>
                            </View>
                            <SwitchComp enabled={availability} setEnabled={setAvailability} />
                  </View>
                  <Divider width={1} color="#CDD1D0" style={{ width: width * 1, alignSelf: 'center' }} />

                  <View style={{ flexDirection: 'row', padding: width * 0.03, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ ...text.mediumBold }}>All buyers can contact</Text>
                                <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>Only enable if you can reply, since your response</Text>
                                <Text style={{ ...text.small, color: colors.quad,}}>time to new messages will affect your rating</Text>
                            </View>
                            <SwitchComp enabled={allBuyerContact} setEnabled={setAllBuyerContact} />
                  </View>
                  <Divider width={1} color="#CDD1D0" style={{ width: width * 1, alignSelf: 'center' }} />

                  <View style={{padding: width * 0.03, alignItems: 'flex-start'}}>
                            <View>
                                <Text style={{ ...text.mediumBold }}>Leave a Message (optional)</Text>
                                <Text style={{ ...text.small, color: colors.quad, marginTop: height * 0.005 }}>Buyer will see this message</Text>     
                            </View>
                            
                  <TextInput style={[text.small, styles.inputField, { height: height * 0.13, width : width * 0.93}]} value={msg} onChangeText={setMsg} placeholder="Add suitable message while you are unavailable" multiline={true} numberOfLines={4} />
                  </View>
            </View>

            </View>
            <Modal
              animationType="slide"
              visible={calVisible}
              onRequestClose={handleCloseCalendar}>
              <Calendar
                visible={calVisible}
                onClose={handleCloseCalendar}
                selectedDate={dateType === 'start' ? startDate : endDate}
                onDateChange={handleDateChange}
              />
            </Modal>

            <View style={{marginTop : height * 0.02, alignItems : 'center'}}>
                  <TouchableOpacity style={[{width : width * 0.85, height : height * 0.06,  justifyContent:'center',}]} onPress={()=>{console.log('Publish')}}>
                        <LinearGradient
                        colors={[colors.primary, colors.secondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{height : height * 0.06, borderRadius: width * 0.1,justifyContent: 'center', alignItems: 'center',  }}
                        >
                        <Text style={[text.smallBold,{ textAlign: 'center', color : '#FFFFFF', letterSpacing : 1}]}>Save Settings</Text>
                        </LinearGradient>
                  </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    inputField: { padding: width * 0.04, borderBottomColor: 'black', backgroundColor: 'white', elevation: 10, borderRadius: width * 0.03, marginTop: height * 0.01, fontSize: width * 0.04 }
});