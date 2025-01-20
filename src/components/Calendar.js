import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, useWindowDimensions, Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'; 
import {getFormatedDate } from 'react-native-modern-datepicker';
import { BlurView } from 'expo-blur';
import colors from '../styles/colors/colors';
import text from '../styles/textStyles';

function Calendar({ visible, onClose, selectedDate, onDateChange }) {

  const {width, height} = useWindowDimensions();

  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1, 'YYYY/MM/DD'));

  return (
    visible && (
      <View style={{flex: 1,}}>
        
        
        <BlurView intensity={2} tint="dark" style={{...StyleSheet.absoluteFillObject, }}>
          <TouchableOpacity style={{ flex: 1,}} onPress={onClose} />
        </BlurView>
        
        <View style={{borderRadius: 10, padding: width * 0.01, alignItems : 'center'}}>
        <Text style={{...text.mediumExtraBold, marginTop : height * 0.06, marginBottom : height * 0.02 }}>Select Date</Text>
          <DatePicker
            mode="calendar"
            minimumDate={startDate}
            selected={selectedDate} 
            onDateChange={onDateChange}
            options={{
              backgroundColor: 'black',
              textHeaderColor: colors.tertiary,
              textDefaultColor: colors.tertiary,
              selectedTextColor: '#ffffff',
              mainColor: colors.tertiary,
              borderColor: colors.tertiary,
              textSecondaryColor: colors.tertiary,
              textHeaderFontSize: 20,
              textDefaultFontSize: 18,
              borderRadius: 10,
              weekdayColor: colors.tertiary,
            //  selectedTextBackgroundColor: '',
            }}

            style={{
              padding : width * 0.01,
              borderRadius : width * 0.09,
              
            }}
          />
        </View>
        
      </View>
    )
  );
}

const styles = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Calendar;
