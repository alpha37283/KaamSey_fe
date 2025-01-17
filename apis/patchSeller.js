import { LOCAL_HOST } from '@env';
import userDataStore from '../asyncStorage/userDataStore';

const { getData } = userDataStore;

export const updateSeller = async () => {
    try {
       
        const seller = await getData('seller')
        const id = await getData('user_id')

        console.log('Patch seller hit', id)
        console.log(Object.keys(seller))

        console.log(`${id} is at the patchSeller`);

        // Send the request
        const response = await fetch(`http://${LOCAL_HOST}/api/sellers/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(seller), 
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


export default {updateSeller};
