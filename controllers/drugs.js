const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const drugsController = {
    index: (req, res) => {
        res.send("Hey whats up this is drugs index")
    }
}




module.exports = drugsController