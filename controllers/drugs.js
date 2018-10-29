const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const drugsController = {
    index: (req, res) => {
        res.send("Hey whats up this is drugs index")
    },
    show: (req, res) => {
        res.render('drugs/show.hbs')
    }
}




module.exports = drugsController