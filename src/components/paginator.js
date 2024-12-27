import React from 'react';
import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; // prev, current, next

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 30, 20],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginLeft: 110,
  },
  dot: {
    height: 7,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
});

export default Paginator;