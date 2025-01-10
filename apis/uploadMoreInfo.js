import { LOCAL_HOST } from '@env';
import userDataStore from '../asyncStorage/userDataStore';

const { getData } = userDataStore;

export const uploadMoreInfo = async ({ id, data }) => {
    try {
       
        const payload = {
            contactNumber: data.contactNumber,
            address: data.address,
        };

//        console.log(id, '==================================> is the id ')

        
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

        console.log(`${id} is at the main send request`);

        // Send the request
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

        console.log('Uploading . . . . at uploadMoreInfo');
        const responseData = await response.json(); 
        return responseData;
    } catch (error) {
       
        console.error('Error during uploadMoreInfo:', error);
        throw error;
    }
};





export const handleUpload = async (profile, number, location) => {
    try {
        console.log('Handling Upload');
        const data = {
            profilePicture: profile,
            contactNumber: number,
            address: location,
        };

        
        const _id = await getData('user_id');
        if (!_id) {
            throw new Error('User ID not found in async storage');
        }

        console.log('Checking image at handleUpload - - - - - => ', profile);

        
        const response = await uploadMoreInfo({ id: _id, data });
        console.log('Update successful:', response);

        return response; 
    } catch (error) {
        console.error('Update failed:', error);
        throw error; 
    }
};

export default {handleUpload};
