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
     
        const response = await fetch(`http://192.168.39.62:5000/api/sellers/${_id}`, {
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
        
        try{
            await storeAsyncData('seller', sellerInfo);
           
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
     
        const response = await fetch(`http://192.168.39.62:5000/api/services/${_id}`, {
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


export default {getSellerAndStore , getServicesAndStore };
