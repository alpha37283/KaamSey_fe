import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Animated, Image, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
import Items from '../components/items';
import slides from './slides';
import Paginator from '../components/paginator.js';
import colors from '../styles/colors/colors.js';
import { useFonts } from 'expo-font';




function Onboard({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const {width, height} = useWindowDimensions();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if(currentIndex < slides.length - 1){
      slidesRef.current.scrollToIndex({index : currentIndex  + 1});
    } else
    {
      navigation.navigate('LoginPage')
    }
  }


   const [fontsLoaded] = useFonts({
        'PM': require('../../assets/fonts/Poppins-Medium.ttf'),
        'PEB' : require('../../assets/fonts/Poppins-ExtraBold.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }

  return (
    <View style={{flex : 1}}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center',alignItems: 'center',backgroundColor : colors.primary}}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <Items item={item} />}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <View style={styles.bottom}>
          <Paginator data={slides} scrollX={scrollX} />
          <TouchableOpacity onPress={scrollTo} style={{marginLeft : width * 0.1}}>
            <View style={{width : width * 0.15, height : height * 0.074, backgroundColor : colors.white, borderRadius : width * 0.2, justifyContent : 'center', alignItems : 'center', elevation : 10}}>
            <Image
              source={
                currentIndex === slides.length - 1
                  ? require('../../assets/icons/next.png')
                  : require('../../assets/icons/next.png')
              }
              style={{width : width * 0.1, height : height * 0.1, resizeMode : 'contain'}}
            />
            </View>
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  bottom : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'space-between',
    marginBottom : 30,
  }

});

export default Onboard;
