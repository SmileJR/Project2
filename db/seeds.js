const mongoose = require('./connections')
const NursingHome = require('../models/NursingHome.js')
const Patient = require('../models/Patient.js')
const Drug = require('../models/Drug.js')

//SEED DATA - Nursing Homes
const nhome1 = new NursingHome({
    name: "Shady Acres",
    location: "123 Acorn Street",
    security: "Low",
    petsAllowed: true,
    patients: [Tom, Sally, Eugene] //This shit has the new products that we listed above, they are in an array. this was referenced in the models page for store
})


//SEED DATA - Patients
const Tom = new Patient({
    firstName: "Tom",
    lastName: "Matheson",
    age: 69,
    conditions: "Heart Problems",
    drugs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Drug' //ONE TO MANY RELATIONSHIP BECAUSE PATIENT CAN HAVE MANY DRUGS
        }
    ],
    roomNumber: 238,
})

const Sally = new Patient({
    firstName: "Tom",
    lastName: "Matheson",
    age: 77,
    conditions: "Loneliness",
    drugs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Drug' //ONE TO MANY RELATIONSHIP BECAUSE PATIENT CAN HAVE MANY DRUGS
        }
    ],
    roomNumber: 333,
})

//SEED DATA - Drugs


