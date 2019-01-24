# HotSheet Medical
## About

![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/Hotsheetlogocolor.png "HotSheet Medical Logo")

This is a full-stack MERN application deployed on Heroku.  You can go to the deployed site located at: https://mighty-tor-94146.herokuapp.com/

In an emergency, it is important to have medical information at your fingertips.  Hot Sheet Medical allows that with a quick push of a button.  Currently information is generated into a HotSheet, which will be formatted based on preference of first responder organization.  In the future it is intended to have that information embedded into a QR code that will allow the first responder to scan the information directly into a tablet or phone for them to utilize.   Currently the set up is as a responsive mobile application and works best on a mobile device. 

## Client-Side 

### Navigation
![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/NavBar.jpg "Navigation Bar")
Navigation is responsive based on screen size. For larger screen, the logo is on the top left of the page and navigation links are located in the top right.   

![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/MobileNav.jpg "Mobile Menu Toggle Navigation")
When the app is on mobile sized screens, the Navigation links at the top hide and the logo is then moved to the right hand side. A toggle button with 3 lines (often called a hamburger menu) is added to the left top side.

![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/MobileNav2.jpg "Mobile Navigation SideDrawer")
Once the toggle Menu button is pressed, a side drawer eases out of the left hand side, where the navigation links are provided for future navigation. A backdrop appears as well.  The sidedrawer is closed when the backdrop is clicked. 


### Home Page
![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/HomePage.jpg "HotSheet Medical Logo")
The Home page has some react-strap elements; however, the majority of the app was developed using CSS through CSS Modules.  Currently the button is hardcoded with information, but will eventually be dynamically added dependent on the user signed in. 

### QR Code Page
![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/QRCodePage.jpg "QRCode Page")

currently the QRCode is a hardcoded example, which will eventually be dynamically produced from the user's information.  The page also has a button that is connected to the "HotSheet" which is all the pertinent medical information a first responder would need. 

### HotSheet Data Page
![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/FormatDropDown.jpg "Drop Down Selector")

The first part of the HotSheet Data page is the dropdown format selector. This is where local first responder organizations will be available as a selection.  Once selected the information will then change the format of the HotSheet Data into the preferred order for that organization.   This HotSheet is provided as a back up in case first responders or medical professions do not have the correct QR Code Reader set up, or need to reference the medical information without the QR Code. 

![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/HotSheet.jpg "HotSheet Data") 
The HotSheet Data is accessed through React props, defined within the application.  However, once User sign in and authentication is finalized,  then dynamic retrieval of props data from the database will be created. 

### Profile
![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/Profile.jpg "Profile")

The profile page is where all the information is kept and where a user will be able to edit and add information. Currently the data is hardcoded in, and edit capability is still in development 


![alt text](https://github.com/Samareimorgan/HotSheetMedical/blob/master/client/src/assets/Images/autocomplete.jpg "autocomplete")
The edit button on the medication area, leds to a medication autocomplete. In development mode this works, however, still debugging production mode

## Server-side
###Authentication
Utilization of bcrypt and jsonewebtoken to create client authentication and login.  This is still in final development. 

###Third-Party API -MAPI US
An ajax call utilizing Unirest to request information from the MAPI US API. Three letters are sent to the API and it retrieves a list of the most common medications that start with those three letters.   It is then sent to the front end and in a dropdown selector for the Medication Autocomplete 

###MongoDB/Mongoose
API routes have been created and work in Postman. These are still in development to have them work with the frontend. 

##Technologies Used
Mongo, Express, React, Node, CSS Modules, Unirest, Bcrypt and jsonwebtoken

##Future Updates
Many aspects of this app are still in development in order for it to be fully functional.  As the app continues to develop, this Read Me will be updated to indicate completion of the functionality. 

In the future after the basic app is functional, it is a good to allow other users to connect with each other and have the medical QR code and hotsheet available.  This allows family members to have information at hand in a crisis.   

## Install Application on Local Machine
#### Dependencies: express & path modules

1. Please ensure node.js is installed 
2. Once you have cloned the github repository, ensure that the package.json is in the folder  
3. If the package.json is in the folder, you can easily install all needed dependencies by typing: 
    npm i
This will install all needed dependencies based on the package.json file
4. Create a local database instance of Mongo and ensure the application is configured with any changes in the server.js and config files.  
5.  Please go to rapidapi.com and obtain an API key for Mapi US.  This will need to be placed in .env file as REACT_APP_MAPI_API_KEY=YourAPIKeyHere 
6. Be sure to start the server.js in one bash instance and npm start in a separate bash instance.   This will ensure communication from both sides
7.  This will now be available on your local server.  

## Credits
Thanks to University of Denver: Trilogy Coding Bootcamp Instructor Terra Taylor and Teaching Assistants Jacq and Evan and Dillion for their assitance in this project.

## License
MIT (c) SamareiMorgan