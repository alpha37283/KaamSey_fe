import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingPage from '../../screens/settingPage';
import ManageServices from '../../screens/ManageServices';
import UserProfileSetting from '../../screens/userProfileSetting';
import CreateService from '../../screens/createService';

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingPage} />
      <Stack.Screen name="ManageServices" component={ManageServices} />
      <Stack.Screen name="ProfileSetting" component={UserProfileSetting}/>
      <Stack.Screen name="CreateService" component={CreateService}/>
    </Stack.Navigator>
  );
}

export default SettingStack;