import userDataStore from '../asyncStorage/userDataStore';
const {storeAsyncData, getData} = userDataStore;
import {LOCAL_HOST} from '@env';

const getSellerAndStore = async ({_id}) => {

    try {
        //const _id = await getData('user_id'); 
        console.log('Id from fetch seller => ', _id)
        if (!_id) {
            throw new Error('User ID is undefined or null');
        }
     
        const response = await fetch(`http://${LOCAL_HOST}/api/sellers/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const {sellerInfo} = data;

        const { profileImage, ...restOfSellerInfo } = sellerInfo;

//        console.log('Rest of seller info =========================> ', restOfSellerInfo);

        
        try{
            await storeAsyncData('seller', restOfSellerInfo);
           
        }
        catch(e)
        {
            console.log('An error occured while saving seller')
        }
        
        return data;

    } catch (e) {
        console.error('Error fetching seller data:', e.message);
    }
};


const getServicesAndStore = async ({_id}) => {
    try {
        //const _id = await getData('user_id'); 
        console.log('Id from fetch seller => ', _id)
        if (!_id) {
            throw new Error('User ID is undefined or null');
        }
     
        const response = await fetch(`http://${LOCAL_HOST}/api/services/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const {services} = data;
        
        try
        {
            await storeAsyncData('services', services);
          
            
        }
        catch(e)
        {
            console.log('An error occured while saving services : ', e);
        }
        
        return data;

    } catch (e) {
        console.error('Error fetching services data:', e.message);
    }
};


const fetchImage = async () => {
  try {
    const id = await getData('user_id'); 
    if (!id) {
      throw new Error('User ID not found.');
    }

    const response = await fetch(`http://${LOCAL_HOST}/api/sellers/image/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

  
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('image')) {
      const data = await response.blob(); 
      const imageUri = URL.createObjectURL(data); 
  
    } else {
      const data = await response.json(); 
      
      return data;
    }
  } catch (e) {
    console.log('Error while fetching image:', e);
  }
};



export default {getSellerAndStore , getServicesAndStore, fetchImage };
