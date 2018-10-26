const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const nursinghomesController = {
    index: (req, res) => {
        res.send("Hey whats up this is nursinghomes index")
    }
}




module.exports = nursinghomesController