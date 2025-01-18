// SelectCategory.js
import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { services } from '../rawData/serviceCategories';
import colors from '../styles/colors/colors';

const { width, height } = Dimensions.get('window');

const selectListData = services.map(item => ({
    key: item.key,
    value: `${item.ser}`
}));

export default function SelectCategory({setCategory}) {
  return (
 
            <SelectList
            setSelected={(val) => setCategory(val)}
            data={selectListData}
            placeholder='None'
            search={false}
            maxHeight={200}
            dropdownShown={false}
            arrowicon={<Image></Image>}
            boxStyles={[styles.boxStyles, { backgroundColor : 'white',width: width * 0.3, height : height * 0.07, borderWidth : 1, borderColor : colors.quad}]} // Custom styles for the dropdown box
            dropdownStyles={[styles.dropdownStyles, { width: width * 0.3}]}
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
