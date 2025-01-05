import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Dimensions, Image, useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';



export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false); // Track the search bar state
  const inputWidth = useSharedValue(50); // Initial width of the search bar

  // Animate the width of the search bar
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(inputWidth.value, { duration: 300 }), // Smooth animation
    };
  });

  // Handle search bar toggle
  const toggleSearchBar = () => {
    setIsExpanded((prev) => !prev);
    inputWidth.value = isExpanded ? 50 : width * 0.8; // Expand to 80% of the screen width
  };

  const {width, height} = useWindowDimensions();

  return (

    
    <View style={styles.container}>
      {/* Animated Search Bar */}
      <Animated.View style={[styles.searchContainer, animatedStyle]}>
        {isExpanded && (
          <TextInput
            style={styles.input}
            placeholder="Search here..."
            placeholderTextColor="#888" // Placeholder color
          />
        )}
      </Animated.View>

      {/* Custom Search Icon */}
      <TouchableOpacity onPress={toggleSearchBar} style={styles.iconContainer}>
        <Image
          source={require('../../assets/icons/icnSearch.png')} // Replace with your own custom icon
          style={styles.icon} // Apply custom styling to your icon
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange background
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
    justifyContent: 'center', // Center the content
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF', // White background
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000', // Black text for input
  },
  iconContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24, // Set the width of your custom icon
    height: 24, // Set the height of your custom icon
    tintColor: 'orange', // Optional: Tint the icon color (e.g., white)
  },
});
