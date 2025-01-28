import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';

import colors from '../styles/colors/colors.js';
import text from '../styles/textStyles.js';

import userDataStore from '../../asyncStorage/userDataStore.js';

const {storeAsyncData, getData} = userDataStore;


function ChatList({ navigation }) {
  
  const [chatList, setChatList] = useState([]);
  const {width, height} = useWindowDimensions();


  useEffect(() => {
    const getMessagesFromAsync = async () => {
      try {
       
        const chatListFromAsync = await getData('chatList');  
//        console.log(chatListFromAsync);
        const {data} = chatListFromAsync;
        setChatList(data);
      } catch (error) {
        console.error('Error fetching chat list:', error);
      }
    };
  
    getMessagesFromAsync(); 
  }, []);
  

  if (chatList.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{...text.mediumExtraBold}}>You don't have any chats yet!!!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.tertiary}}>
      <View style={{padding: width * 0.05,  alignItems : 'center', justifyContent : 'center',height : height * 0.15, marginTop : height * 0.02}}>
                  <Text style={{...text.largeExtraBold ,fontSize: 24, fontWeight: 'bold', color: 'white', marginTop : height * 0.05}}>Chat</Text>
      </View>
      
      <ScrollView
  style={{ flex: 1, borderTopLeftRadius: width * 0.1, borderTopRightRadius: width * 0.1, backgroundColor: colors.fifth, padding : width * 0.04, marginTop : height * 0.043}}
>
  {chatList.map((chat) => {
   
    const hardCodeImages = {
      Atif: require('../../assets/images/atif.jpg'),
      Abdullah: require('../../assets/images/sardar.jpg'),
      Kamran: require('../../assets/images/kami.jpg'),
    };

   
    const avatarImage = hardCodeImages[chat.name] || null; 

    return (
      <TouchableOpacity
        key={chat._id}
        style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
        onPress={() =>
          navigation.navigate('ChatDetail', {
            chatId: chat.chatId,
            name: chat.name,
            receiverId: chat.receiverId,
            avatar: avatarImage,
          })
        }
      >
        {avatarImage ? (
         
          <Image source={avatarImage} style={{ width: width * 0.12, height: height * 0.06, borderRadius: width * 0.07 }} />
        ) : (
         
          <View style={{ width: width * 0.12, height: height * 0.06, borderRadius: width * 0.07, backgroundColor: 'orange' }} />
        )}
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>{chat.name}</Text>
          <Text style={{ color: '#666', marginTop: 4 }}>{chat.lastMessage}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: '#999', fontSize: 12 }}>{chat.timestamp}</Text>
          {chat.unread > 0 && (
            <View style={{ backgroundColor: '#4CAF50', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 4, marginTop: 8 }}>
              <Text style={{ color: 'white', fontSize: 12 }}>{chat.unread}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  })}
</ScrollView>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0', alignItems: 'center'
  },
  unreadBadge: {
    backgroundColor: '#FF5252',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4
  },
});

export default ChatList;