create functions to fetch user, reviews, and reqServices from the backend and pass it to the asyncStorage creation.
store userObjectId in asyncStorage as well.

We need to create separate functions for each preventing invoking whole function just for one value.

- I have stored user_id in asyncStorage
- now what i can do is fetch reviews, reqServices and other things through that id that will be used on home page
- fetch reviews and reqServices on asycnStorage as well

- adjusted backend for the services
- now services will be fetched using seller's id
-

things are getting too cofusing . . . . .

we have login page => on login is handled using apiConnections which stores seller_id in asyncStorage => while fetching seller and services => we are using seller's id then store that data on asyn Storage

- Now what i have to do is set up home page for the given data from asyncStorage then the home page will be completed . . . .
