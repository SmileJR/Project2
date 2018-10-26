const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const patientsController = {
    index: (req, res) => {
        res.send("Hey whats up this is patients index")
    }
}




module.exports = patientsController