import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';


import { SelectList } from 'react-native-dropdown-select-list';
import countryCode from '../rawData/countryCode';
import colors from '../styles/colors/colors';

const selectListData = countryCode.map(item => ({
    key: item.code,
    value: `${item.code} (${item.country})`
  }));

const {width, height} = Dimensions.get('window')

export default function AddContact({setSelectCode}) {




  return (
 
            <SelectList
            setSelected={(val) => setSelectCode(val)}
            data={selectListData}
            placeholder='+92 (PK)'
            search={false}
            maxHeight={200}
            dropdownShown={false}
            arrowicon={<Image></Image>}
            boxStyles={[styles.boxStyles, { width: width * 0.23, height : height * 0.07, borderWidth : 1, borderColor : colors.quad}]} // Custom styles for the dropdown box
            dropdownStyles={[styles.dropdownStyles, { width: width * 0.23 }]}
            inputStyles={{ fontSize: width * 0.04, width: width * 0.19, marginLeft: width * -0.02 }}
        />
 
  );
}

const styles = StyleSheet.create({
    boxStyles: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems : 'center'
      },
})
