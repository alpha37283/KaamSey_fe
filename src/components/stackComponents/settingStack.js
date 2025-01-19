import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingPage from '../../screens/settingPage';
import ManageServices from '../../screens/ManageServices';
import UserProfileSetting from '../../screens/userProfileSetting';
import CreateService from '../../screens/createService';
import { ServiceContext } from '../../screens/context/createServiceContext';
import { ServiceProvider } from '../../screens/context/createServiceContext';
import NextComponent from '../../screens/nextComp';
import CreateServiceOverview from '../../screens/createdServiceOverview';

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
<ServiceProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingPage} />
      <Stack.Screen name="ManageServices" component={ManageServices} />
      <Stack.Screen name="ProfileSetting" component={UserProfileSetting}/>
      <Stack.Screen name="CreateService" component={CreateService}/>
      <Stack.Screen name='Next' component={NextComponent}/>
      <Stack.Screen name="ServiceOverview" component={CreateServiceOverview}/>
    </Stack.Navigator>
</ServiceProvider>    
  );
}

export default SettingStack;