const mongoose = require("mongoose");
const db = require("../models");

// Empties the db collections and inserts the seeds below
//To SEED Heroku/mLab, run in the root folder: '$ heroku run node scripts/seedDB.js'

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://locacalhost:27017/hotsheetmedical"
);

//Add seeds for the Users
const userSeed = [
    {
     first_name: "Samantha",
     middle_name: "Ann",
     last_name: "Johnston",
     address: {street_address: "11454 Donley Dr.",
      city: "Parker",
      state: "CO",
      zipcode: 80138,},
     email: "samareimorgan@gmail.com",
     phone: 7203987174,
     birthdate: 6061977,
     password: "password",
    },
    {
    first_name: "Josie",
     middle_name: "Grace",
     last_name: "Jones",
     street_address: "1112 Fake Dr.",
     city: "Parker",
     state: "CO",
     zipcode: 80138,
     email: "fakeemail@gmail.com",
     phone: 3031115555,
     birthdate: 5161989,
     password: "passWord!!",
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

  // Add seeds for Medication Collection
  const medSeed = [
    {
      medName: "Tylenol"
    },
    {medName: "Lipitor"},
    {medName: "Vitamin B12"}
  ];

  db.Medication
  .remove({})
  .then(() => db.Medication.collection.insertMany(medSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // Add seeds for Allergies Collection
  const allergySeed = [
    
    {allergan: "Soy"},
    {allergan: "Penicillin"},
    {allergan: "Eggs"},
    {allergan: "Sulfa"}
  ];

  db.Allergies
  .remove({})
  .then(() => db.Allergies.collection.insertMany(allergySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  

    // Add seeds for Doctors Collection
    const doctorsSeed = [ 
    
    { doctor_type: "Primary",
      doctor_info: {
        doc_first_name: "Joesph",
        doc_last_name: "Elmers"
      },
      doctor_location: {
        office_name: "Medical Docs Up",
        office_street_address: "4530 Doctors St",
        office_city: "Denver",
        office_state: "CO",
        office_zip_code: 80247
      },
      doctor_phone_number: 3035854569
    },

    { doctor_type: "Neurologist",
      doctor_info: {
        doc_first_name: "Jake",
        doc_last_name: "Anderson"
      },
      doctor_location: {
        office_name: "Tik Tok Brain Surgary",
        office_street_address: "423 Neuropath St",
        office_city: "Denver",
        office_state: "CO",
        office_zip_code: 80239
      },
      doctor_phone_number: 3035554512
    }
  ];

  db.Doctors
  .remove({})
  .then(() => db.Doctors.collection.insertMany(doctorsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });