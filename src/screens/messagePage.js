import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import io from 'socket.io-client';
import fetchChatData from '../../apis/fetchChatData.js';
const {sendMessageOnSocket, fetchMessages} = fetchChatData;
import userDataStore from '../../asyncStorage/userDataStore.js';
const {storeAsyncData, getData} = userDataStore;
import {LOCAL_HOST} from '@env'

const socket = io(`http://${LOCAL_HOST}`);

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if needed
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};


function MessagePage({ route, navigation }) {
  const { chatId, name, receiverId , avatar} = route.params;
  const senderName = "Muneeb";
  const receiverName = name;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [senderId, setSenderId] = useState(null);

  const {width, height } = useWindowDimensions();

useEffect(() => {

  const fetchSenderId = async () => {
      const id = await getData('user_id');
      setSenderId(id); 
    };

    fetchSenderId();
    sendMessageOnSocket(chatId, receiverId, setMessages)

    return () => {
      socket.off('receiveMessage');
    };
}, [chatId]);


const sendMessage = async () => {
  try {
    if (!senderId) {
      console.error('Error: senderId not found');
      return;
    }
    const newMessage = {
      senderId,
      senderName,
      receiverId,
      receiverName,
      chatId,
      text,
    };
    socket.emit('sendMessage', newMessage);
    setText('');
  } catch (e) {
    console.error('Error occurred while sending message:', e);
  }
};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomColor: '#f0f0f0', marginTop : 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Image source={avatar} style={{width: 40, height: 40, borderRadius: 20, marginLeft: 12}} />
        <View style={{flex: 1, marginLeft: 12,}}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#333'}}>{name}</Text>
        </View>
          <TouchableOpacity style={{marginLeft: 8}}>
            <Icon name="phone" size={24} color="#333" />
          </TouchableOpacity>
      </View>

      <ScrollView style={{flex: 1, padding: 16}}>
        {messages.map((message) => (
          <View
            key={message._id}
            style={[
              {marginBottom: 16, maxWidth: '80%'},
              message.senderId === senderId ? {alignSelf: 'flex-end',} : {alignSelf: 'flex-start',}
            ]}
          >
            <View style={[ message.senderId === senderId 
                 ? {backgroundColor: '#4CAF50', padding: 12, borderTopLeftRadius : 16, borderBottomLeftRadius : 16, borderBottomRightRadius : 16}
                 : {backgroundColor: '#f0f0f0', padding: 12, borderTopRightRadius : 16, borderBottomLeftRadius : 16, borderBottomRightRadius : 16}]} >
              <Text style={message.senderId === senderId ? {color: 'white'} : {color: '#333'}}>
                {message.text}
              </Text>
            </View>
                <View style={{flexDirection : 'row', justifyContent: 'flex-end', marginRight : width * 0.01}}>
                <Text style={{fontSize: 10, color: '#999', marginTop: 4,}}> {formatTime(new Date(message.createdAt))}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={{marginRight: 8}}>
          <Icon name="paperclip" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Write your message..."
          placeholderTextColor="#999"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={{marginLeft: width * 0.01}}>
          <Icon name="camera" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 8}} onPress={sendMessage}>
          <Icon name="send" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0'
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8
  },
});

export default MessagePage;

