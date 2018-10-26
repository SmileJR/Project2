const express = require('express')
//requireing express
const router = express.Router()
// applicationController is the main entry point to application file
const applicationController = require('../controllers/application')
// after making the variable of application controller I need to make an actual controller file
const drugsController = require('../controllers/drugs')
const nursinghomesController = require('../controllers/drugs')
const patientsController = require('../controllers/drugs')

// now im going to make a route to my application controller
router.get(`/`, applicationController.index)

// =======NURSING HOMES========
router.get(`/nursinghomes`, nursinghomesController.index)
// router.get(`/nursinghomes/new`, nursinghomesController.new)
// router.get(`/nursinghomes/:nursinghomesId`, nursinghomesController.show)

// ========PATIENTS========
router.get(`/patients`, patientsController.index)


// ==============DRUGS===================
router.get(`/drugs`, drugsController.index)
// router.get(`/drugs/new`, drugsController.new)
// router.get(``)




// this is my router and im going to export its capabilities to the rest of these files
module.exports = router