const mongoose = require('./connections')
const NursingHome = require('../models/NursingHome.js')
const Patient = require('../models/Patient.js')
const Drug = require('../models/Drug.js')



//SEED DATA - Drugs
const drug1 = new Drug({
    img: "http://d1dc7fy73ia9qh.cloudfront.net/wp-content/uploads/2016/05/Medium-Length-Hairstyles-for-Older-Women-6.jpg?iv=219",
    name: "Triazolam",
    strengthInMg: 200,
    routeTaken: "Orally",
    dailyFrequency: "QID"
})

const drug2 = new Drug({
    img: "http://d1dc7fy73ia9qh.cloudfront.net/wp-content/uploads/2016/05/Medium-Length-Hairstyles-for-Older-Women-6.jpg?iv=219",
    name: "Captopril",
    strengthInMg: 1000,
    routeTaken: "Orally",
    dailyFrequency: "BID"
})

const drug3 = new Drug({
    img: "http://d1dc7fy73ia9qh.cloudfront.net/wp-content/uploads/2016/05/Medium-Length-Hairstyles-for-Older-Women-6.jpg?iv=219",
    name: "Omeprazole",
    strengthInMg: 40,
    routeTaken: "Orally",
    dailyFrequency: "QD"
})



//SEED DATA - Patients
const Tom = new Patient({
    img: "http://d1dc7fy73ia9qh.cloudfront.net/wp-content/uploads/2016/05/Medium-Length-Hairstyles-for-Older-Women-6.jpg?iv=219",
    firstName: "Tom",
    lastName: "Matheson",
    age: 68,
    conditions: "Heart Problems",
    drugs: [drug1],
    roomNumber: 238
})

// const Sally = new Patient({
//     firstName: "Tom",
//     lastName: "Matheson",
//     age: 77,
//     conditions: "Loneliness",
//     roomNumber: 333,
//     pet: "Cat",
//     petName: "Scruffles"
// })

const Eugene = new Patient({
    img: "https://i.pinimg.com/originals/54/42/e2/5442e25f6479af20d2f4b77c1c5ddf41.jpg",
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
    patients: [Eugene]
    //patients: [Sally, Eugene] not sure if i can do it like this
})

const nhome2 = new NursingHome({
    name: "Sunset Crossing",
    location: "444 Sunset Ave",
    security: "Mid-Level",
    petsAllowed: false,
    patients: [Tom] //This has the new patients that we listed above, they are in an array. this was referenced in the models page for store
})

NursingHome.remove({}) //if there is a nursinghome that exists delete all of them and make a clean slate
    .then(() => Patient.insertMany([Eugene,Tom])) 
    .then(() => Drug.insertMany([drug1,drug2,drug3])) 
    .then(() => nhome1.save())
    .then(() => nhome2.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())


