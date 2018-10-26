const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const NursingHome = new Schema({
    name: String,
    location: String,
    security: String,
    petsAllowed: Boolean,
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patient' //ONE TO MANY RELATIONSHIP BECAUSE ONE HOME CAN HAVE MANY PATIENTS
        }
    ]
})

module.exports = mongoose.model('NursingHome', NursingHome)