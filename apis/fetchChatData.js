const fetchChatList = async () => {
    
    try 
    {
        const data = await fetch(('http://192.168.39.62:3000/api/messages/chatList/abc'), {
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


const fetchMessages = async (chatId, setMessages) => {
try {
    const response = await fetch(`http://192.168.39.62:3000/api/messages/${chatId}`);
    const data = await response.json();
    setMessages(data);
} catch (error) {
    console.error('Error fetching messages:', error);
}
};

export default {fetchChatList, fetchMessages};