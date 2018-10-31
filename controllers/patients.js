const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const patientsController = {
    index: (req, res) => {
        Patient.find()//find all the patients
        .then((patients) => {
        res.render(`patients/index.hbs`, {
            patients: patients
        })
    })
    },
    show: (req, res) => {
        Patient.findById(req.params.id).then((patients) => {
        res.render('patients/show', {patients: patients})

    })
    }
}




module.exports = patientsController