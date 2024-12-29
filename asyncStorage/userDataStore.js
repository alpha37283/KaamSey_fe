import AsyncStorage from "@react-native-async-storage/async-storage";

const storeAsyncData = async (key, value) => {
    try {

      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('Data successfully stored in async storage => ', key);

    } catch (error) {

      console.error('Error storing data:', error);

    }
  };
  
  const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            const parsedData = JSON.parse(data); // Parse the JSON string
            console.log('Getting Data from asyncStorage => ', key);
            return parsedData;
        } else {
            console.log('No data found for key:', key);
            return null;
        }
    } catch (e) {
        console.error('Some error occurred while getting data from AsyncStore', e);
    }
};





 export default {storeAsyncData, getData};



  