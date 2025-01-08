import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';
import colors from '../styles/colors/colors.js';

import userDataStore from '../../asyncStorage/userDataStore.js';
const {storeAsyncData, getData} = userDataStore;


function ChatList({ navigation }) {
  
  const [chatList, setChatList] = useState([]);
  const {width, height} = useWindowDimensions();


  useEffect(() => {
    const getMessagesFromAsync = async () => {
      try {
       
        const chatListFromAsync = await getData('chatList');  // => fetch list stored on asyncStorage
        console.log(chatListFromAsync);
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
        <Text>Loading chats...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.tertiary}}>
      <View style={{padding: width * 0.05, marginTop : height * 0.02}}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: height * 0.03, marginTop : height * 0.03}}>Chat</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 25, padding: 8}}>
                <Image source={require('../../assets/icons/icnSearch.png')} style={{width : width * 0.07, height : height * 0.04, tintColor : 'white'}}/>
                <TextInput placeholder="Search" placeholderTextColor="white" style={{padding : width * 0.03}}/>
              </View>
      </View>
      
      <ScrollView
  style={{ flex: 1, borderTopLeftRadius: width * 0.1, borderTopRightRadius: width * 0.1, backgroundColor: 'white' }}
>
  {chatList.map((chat) => {
   
    const hardCodeImages = {
      Atif: require('../../assets/images/atif.jpg'),
      Zoha: require('../../assets/images/zoha.jpg'),
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



// {chatList.map(chat => (
        
//   <TouchableOpacity key={chat._id} style={styles.chatItem} onPress={() => navigation.navigate('ChatDetail', { chatId: chat.chatId, name: chat.name, receiverId : chat.receiverId })}>

//     <Image source={chat.avatar} style={{width: width * 0.12, height: height * 0.06 , borderRadius: width * 0.07, backgroundColor : 'orange'}} />
//     <View style={{flex: 1, marginLeft: 16}}>
//       <Text style={{fontSize: 16, fontWeight: '600', color: '#333'}}>{chat.name}</Text>
//       <Text style={{color: '#666', marginTop: 4}}>{chat.lastMessage}</Text>
//     </View>
//     <View style={{alignItems: 'flex-end'}}>
//       <Text style={{color: '#999', fontSize: 12}}>{chat.timestamp}</Text>
//       {chat.unread > 0 && (
//         <View style={styles.unreadBadge}>
//           <Text style={{color: 'white', fontSize: 12}}>{chat.unread}</Text>
//         </View>
//       )}
//     </View>
//   </TouchableOpacity>
//   ))}