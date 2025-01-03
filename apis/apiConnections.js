import userDataStore from "../asyncStorage/userDataStore";
const {storeAsyncData, clearAllData} = userDataStore;
import {LOCAL_HOST} from '@env';
import fetchSeller from "./fetchSeller";
const {getSellerAndStore , getServicesAndStore, } = fetchSeller;


const signUpSeller = async (name, email, password) => {

    console.log(name, " ", email, " ", password);
  
    if(email == '' || password == '' || name == '')
      {
          console.log('Empty Field!!!')
          return false;
      }
  
  
      try {
        

        const response = await fetch(`http://192.168.39.62:3000/api/sellers/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
  
        console.log(response);
        const data = await response.json();
  
        if (data.success) {
          console.log('Success', 'SingUp successful');
          return true;
         
          
        } else {
          console.log('Error', data.msg || 'SingUp failed');
          return false;
        }
      } catch (error) {
        console.error('Error Signing Up:', error);
        return false;
      }
  
  }

  
  const loginSeller = async (email, password) => {
      
      console.log(email,password);
  
      if(email == '' || password == '')
      {
          console.log('Empty field detected!!!')
          return false;
      }
  
      try {

        const response = await fetch(`http://192.168.39.62:3000/api/sellers/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();

  
        if (data.success) {

          console.log('Success Login successful');
          const _id = data.seller._id;
          storeAsyncData('user_id', _id);
          await getSellerAndStore({_id});
          await getServicesAndStore({_id});
          console.log('Data stored successfully');
          return true;

        } else {

          console.log('Error', data.msg || 'Login failed');
          return false;

        }

      } catch (error) {
        console.error('Error logging in:', error);
        return false;
      }
    };


export default {loginSeller, signUpSeller};