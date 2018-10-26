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
router.get(`/`, drugsController.index)
router.get(`/`, nursinghomesController.index)
router.get(`/`, patientsController.index)

// this is my router and im going to export its capabilities to the rest of these files
module.exports = router