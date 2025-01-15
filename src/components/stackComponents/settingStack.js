import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingPage from '../../screens/settingPage';
import ManageServices from '../../screens/ManageServices';

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingPage} />
      <Stack.Screen name="ManageServices" component={ManageServices} />
    </Stack.Navigator>
  );
}

export default SettingStack;