//Bring in Depedencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");



//Define Port 
const PORT = process.env.PORT || 3001;

//Initialize express
const app = express();

//Use morgan logger to log requests
app.use(logger("dev"));




//Define middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Serve up static assets on heroku/local
    if(process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    } else {
        app.use(express.static("client/public"));
    }

//Add routes, both API and view
app.use(routes);

//Connect to the Mongo DB
mongoose.connect('mongodb://localhost:27017/hotsheetmedical', { useNewUrlParser: true });


//Start the API Server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});