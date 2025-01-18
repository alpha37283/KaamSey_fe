create functions to fetch user, reviews, and reqServices from the backend and pass it to the asyncStorage creation.
store userObjectId in asyncStorage as well.

We need to create separate functions for each preventing invoking whole function just for one value.

- I have stored user_id in asyncStorage
- now what i can do is fetch reviews, reqServices and other things through that id that will be used on home page
- fetch reviews and reqServices on asycnStorage as well

- adjusted backend for the services
- now services will be fetched using seller's id

things are getting too cofusing . . . . .

we have login page => on login is handled using apiConnections which stores seller_id in asyncStorage => while fetching seller and services => we are using seller's id then store that data on asyn Storage

- Now what i have to do is set up home page for the given data from asyncStorage then the home page will be completed . . . .

# b : clear All data issue

# Mock data

const mockOrders = [
{
id: '1',
name: 'Kamran Wahab',
description: 'Locally based trusted driver for booking.',
price: '$12',
status: 'Pending',
},
{
id: '2',
name: 'John Doe',
description: 'Reliable package delivery service.',
price: '$15',
status: 'Completed',
},
{
id: '3',
name: 'Alice Smith',
description: 'Cancellation and returns service.',
price: '$10',
status: 'Cancelled',
},

];

# Make pages design consistent like diff between chat and order page

# fix chat

stored messages and chatList on asyncStorage
retrieve from async

# add backend functionality for the images of the users

1. add profile params being passed
2. camera being opened
3. attachement being opened component

chatList is stored in async with key 'chatList'

# Prevent user form entering empty login sign up info

# The issue is that i am storing seller info on signup or login => not an issue

# ACTIVE PAUSED TAB

- create a page ManageServices
- on it display the navigation
- fetch active and paused services separately
- store them in asyn storage
- display them from async stroge

- manage backend for setting page
- manage backend for gig editing
- manage backend for profile Setting

# NOTE: Pick image is reuseable

# to update an image its a different method to update and image

# too large image import RNFS from 'react-native-fs';

const saveImageLocally = async (base64Image, filename) => {
const path = `${RNFS.DocumentDirectoryPath}/${filename}`;
await RNFS.writeFile(path, base64Image, 'base64');
return path; // Return the file path for later use
};
issue solution

=>> now images are being fetched directly from api, not asnc change this back to asyn and upload smaller images
