const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Patient = new Schema({
    img: String,
    firstName: String,
    lastName: String,
    age: Number,
    conditions: String,
    drugs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Drug' //ONE TO MANY RELATIONSHIP BECAUSE PATIENT CAN HAVE MANY DRUGS
        }
    ],
    roomNumber: Number,
    pet: String,
    petName: String
    
})

module.exports = mongoose.model('Patient', Patient)