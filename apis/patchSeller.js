import { LOCAL_HOST } from '@env';
import userDataStore from '../asyncStorage/userDataStore';

const { getData } = userDataStore;

const uploadUserProfileSetting = async (data) => {
    try {
      const id = await getData('user_id');
      if (!id) throw new Error('User ID not found in AsyncStorage.');
  
      console.log('ID at the profileSettingUpload:', id);
  

      const payload = {
        name: data.name,
        location: data.city,
        bio: data.bio,
        contactNumber: data.contactNumber,
        address: data.city,
      };
  
      
      if (data.profilePicture) {
        const uriParts = data.profilePicture.split('.');
        const fileType = uriParts[uriParts.length - 1];
  
        const response = await fetch(data.profilePicture);
        const blob = await response.blob();
  
        const base64Data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
  
        payload.profileImage = {
          data: base64Data,
          contentType: `image/${fileType}`,
        };
      }
  
      // Make API request
      const response = await fetch(`http://${LOCAL_HOST}/api/sellers/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`Error updating seller: ${response.status} ${response.statusText}`);
      }
  
      const responseData = await response.json();
      console.log('Profile updated successfully:', responseData);
  
      return responseData;
    } catch (e) {
      console.error('An error occurred while uploading user profile settings:', e);
      throw e;
    }
  };


export default {uploadUserProfileSetting};
