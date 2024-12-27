import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Animated, Image, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
import Items from '../components/items';
import slides from './slides';
import Paginator from '../components/paginator.js';
import { LinearGradient } from 'expo-linear-gradient';




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

  return (
    <View style={{flex : 1}}>
      <SafeAreaView style={styles.safeArea}>
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
          <TouchableOpacity onPress={scrollTo} style={styles.imgContainer}>
            <View style={{width : width * 0.16, height : height * 0.08, backgroundColor : '#ffffff', borderRadius : width * 0.2, justifyContent : 'center', alignItems : 'center'}}>
            <Image
              source={
                currentIndex === slides.length - 1
                  ? require('../../assets/icons/next.png')
                  : require('../../assets/icons/next.png')
              }
              style={{width : width * 0.15, height : height * 0.15, resizeMode : 'contain'}}
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
  safeArea: {
    flex: 1, // Adjusted to make the SafeAreaView fill the available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 90,
    height : 90,
    resizeMode: 'contain',
    marginLeft : 20
  
  },
  bottom : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'space-between',
    marginBottom : 30
  }

});

export default Onboard;
