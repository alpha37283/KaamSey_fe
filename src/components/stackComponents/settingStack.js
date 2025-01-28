import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingPage from '../../screens/settingPage';
import ManageServices from '../../screens/ManageServices';
import UserProfileSetting from '../../screens/userProfileSetting';
import CreateService from '../../screens/createService';
import { ServiceProvider } from '../../screens/context/createServiceContext';
import CreateServiceOverview from '../../screens/createdServiceOverview';
import NotificationSetting from '../../screens/notificationSetting';
import AvailabilitySetting from '../../screens/availabilitySetting';

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
<ServiceProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingPage} />
      <Stack.Screen name="ManageServices" component={ManageServices} />
      <Stack.Screen name="ProfileSetting" component={UserProfileSetting}/>
      <Stack.Screen name="CreateService" component={CreateService}/>
      <Stack.Screen name="ServiceOverview" component={CreateServiceOverview}/>
      <Stack.Screen name="NotificationSetting" component={NotificationSetting}/>
      <Stack.Screen name="AvailabilitySetting" component={AvailabilitySetting}/>
    </Stack.Navigator>
</ServiceProvider>    
  );
}

export default SettingStack;