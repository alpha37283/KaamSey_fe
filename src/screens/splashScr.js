import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import { useEffect } from 'react';

export default function Splash({navigation}) {

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboard');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/images/eclips1.png')} style={{height : height * 0.3}} />
      </View>
      <View>
        <Image source={require('../../assets/images/logoMainLarge.png')} style={styles.logo} />
      </View>
      <View>
        <Image source={require('../../assets/images/eclips2.png')} style={styles.image} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'space-between',
  }
});
