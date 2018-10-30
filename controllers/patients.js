const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const patientsController = {
    index: (req, res) => {
        res.render(`patients/index.hbs`)
    },
    show: (req, res) => {
        res.render('patients/show.hbs')
    }
}




module.exports = patientsController