const mongoose = require('./connections')
const NursingHome = require('../models/NursingHome.js')
const Patient = require('../models/Patient.js')
const Drug = require('../models/Drug.js')

//SEED DATA - Drugs
const drug1 = new Drug({
    name: "Triazolam",
    strengthInMg: 200,
    routeTaken: "Orally",
    dailyFrequency: "QID"
})

const drug2 = new Drug({
    name: "Captopril",
    strengthInMg: 1000,
    routeTaken: "Orally",
    dailyFrequency: "BID"
})

const drug3 = new Drug({
    name: "Omeprazole",
    strengthInMg: 40,
    routeTaken: "Orally",
    dailyFrequency: "QD"
})



//SEED DATA - Patients
const Tom = new Patient({
    firstName: "Tom",
    lastName: "Matheson",
    age: 68,
    conditions: "Heart Problems",
    drugs: [drug1],
    roomNumber: 238,
})

const Sally = new Patient({
    firstName: "Tom",
    lastName: "Matheson",
    age: 77,
    conditions: "Loneliness",
    roomNumber: 333,
    pet: "Cat",
    petName: "Scruffles"
})

const Eugene = new Patient({
    firstName: "Eugene",
    lastName: "Minkler",
    age: 99,
    conditions: "Dementia",
    drugs: [ drug1, drug2, drug3],
    roomNumber: 838,
    pet: "Fish",
    petName: "Artemis"
})


//SEED DATA - Nursing Homes
const nhome1 = new NursingHome({
    name: "Shady Acres",
    location: "123 Acorn Street",
    security: "Low",
    petsAllowed: true,
    patients: [Sally, Eugene] //This shit has the new products that we listed above, they are in an array. this was referenced in the models page for store
})

const nhome2 = new NursingHome({
    name: "Sunset Crossing",
    location: "444 Sunset Ave",
    security: "Mid-Level",
    petsAllowed: false,
    patients: [Tom,] //This shit has the new products that we listed above, they are in an array. this was referenced in the models page for store
})

module.exports = mongoose.model('Drug', Drug)


