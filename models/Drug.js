const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Drug = new Schema({
    name: String,
    strengthInMg: Number,
    routeTaken: String,
    dailyFrequency: String
})

module.exports = mongoose.model('Drug', Drug)