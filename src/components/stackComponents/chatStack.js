import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from '../../screens/chatListPage.js';
import MessagePage from '../../screens/messagePage.js';

const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatPage" component={ChatList} />
      <Stack.Screen name="ChatDetail" component={MessagePage} />
    </Stack.Navigator>
  );
}

export default ChatStack;