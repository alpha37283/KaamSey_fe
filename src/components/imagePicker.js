import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent() {
    const placeholder = require('../../assets/icons/apple.png'); // Placeholder image
    const [profile, setProfile] = useState(null); // State to hold the selected image

    // Function to pick an image
    const pickImage = async () => {
        // Request media library permissions
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access the gallery is required!');
            return;
        }

        // Launch image picker
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true, // Allow user to crop the image
            quality: 1, // High-quality image
        });

        // If the user doesn't cancel, update the profile state with the selected image URI
        if (!result.canceled) {
            setProfile(result.assets[0].uri); // Use `result.assets[0].uri` for the selected image's URI
        }
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
            <Text>Image Picker Test</Text>
            <TouchableOpacity onPress={pickImage}>
                <View style={{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden', borderWidth: 1, borderColor: 'gray' }}>
                    {/* Show the selected image if available, otherwise show the placeholder */}
                    <Image 
                        source={profile ? { uri: profile } : placeholder} 
                        style={{ width: '100%', height: '100%' }} 
                        resizeMode="cover" 
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}
