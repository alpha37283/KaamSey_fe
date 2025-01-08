import {LOCAL_HOST} from '@env';
import io from 'socket.io-client';



const socket = io(`http://${LOCAL_HOST}`);

const fetchChatList = async () => {
    
    try 
    {
        const data = await fetch((`http://${LOCAL_HOST}/api/messages/chatList/67778d89e93a19f29eb9af45`), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const chatList = await data.json();
        console.log('Chat List => ', chatList);
        return chatList;
    }
    catch(e)
    {
        console.log('An error occured while fetching chat list on fetching list ', e);
    }
}


const fetchMessages = async (chatId) => {
try {
    const response = await fetch(`http://${LOCAL_HOST}/api/messages/${chatId}`);
    const data = await response.json();
    console.log('Messages are => ' , data)
    return data;
} catch (error) {
    console.error('Error fetching messages:', error);
}
};


const sendMessageOnSocket = async (chatId, receiverId, setMessages) => {
    try {
      // Fetch messages for the given chatId
      const fetchedMessages = await fetchMessages(chatId, setMessages);
      setMessages(fetchedMessages)
  
      // Join the room associated with the receiverId
      socket.emit('joinRoom', receiverId);
  
      // Listen for incoming messages
      socket.on('receiveMessage', (message) => {
        console.log('Received message => ', message.chatId);
        if (message.chatId === chatId) {
          setMessages((prevMessages) => [...prevMessages, message]);
        }
      });
    } catch (error) {
      console.error('Error in sendMessageOnSocket:', error);
    }
  };
  

export default {fetchChatList, fetchMessages, sendMessageOnSocket};