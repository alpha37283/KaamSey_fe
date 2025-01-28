import {LOCAL_HOST} from '@env';
import io from 'socket.io-client';
import userDataStore from '../asyncStorage/userDataStore';
const {storeAsyncData, getData} = userDataStore;

const socket = io(`http://${LOCAL_HOST}`);   

const fetchChatListAndStore = async ({_id}) => {
    try 
    {
        const data = await fetch((`http://${LOCAL_HOST}/api/messages/chatList/${_id}`), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const chatList = await data.json();
        await storeAsyncData('chatList', chatList);    // => stored data on asyncStorage and will be retrieved on chatListPage.js
//        console.log('Chat List => ', chatList);
        return chatList;
    }
    catch(e)
    {
        console.log('An error occured while fetching chat list on fetching list ', e);
    }
}


const fetchMessagesAndStore = async (chatId) => {
try {
    const response = await fetch(`http://${LOCAL_HOST}/api/messages/${chatId}`);
    const data = await response.json();
    // console.log('Messages are => ' , data)
    // const jsonMessagesData = JSON.stringify(data);   => tried to store message on async storage but failed
    // await storeAsyncData('messages', jsonMessagesData);
    // console.log('Messages at fetch => ', jsonMessagesData);

    return data;
} catch (error) {
    console.error('Error fetching messages:', error);
}
};


const sendMessageOnSocket = async (chatId, receiverId, setMessages) => {
    try {

      const messagesFetched = await fetchMessagesAndStore(chatId);
      console.log('--------------------data-------------------\n\n\n',messagesFetched);
      setMessages(messagesFetched);
  
      socket.emit('joinRoom', receiverId);
  
      socket.on('receiveMessage', (message) => {

        if (message.chatId === chatId) {
          setMessages((prevMessages) => [...prevMessages, message]);
        }
      });
    } catch (error) {
      console.error('Error in sendMessageOnSocket:', error);
    }
  };
  

export default {fetchChatListAndStore, fetchMessagesAndStore, sendMessageOnSocket};