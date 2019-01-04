const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    "mongodb://locacalhost:27017/hotsheetmedical"
);

const userSeed = [
    {
     first_name: "Samantha",
     middle_name: "Ann",
     last_name: "Johnston",
     street_address: "11454 Donley Dr.",
     city: "Parker",
     state: "CO",
     zipcode: 80138,
     email: "samareimorgan@gmail.com",
     phone: 7203987174,
     birthdate: 6061977,
     pin: 123456,
     password: "password",
     
    }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
