const express = require('express')
//requireing express
const router = express.Router()
// applicationController is the main entry point to application file
const applicationController = require('../controllers/application')
// after making the variable of application controller I need to make an actual controller file
const drugsController = require('../controllers/drugs')
const nursinghomesController = require('../controllers/nursinghomes')
const patientsController = require('../controllers/patients')

// now im going to make a route to my application controller
router.get(`/`, applicationController.index)

// =======NURSING HOMES========
router.get(`/nursinghomes`, nursinghomesController.index)
router.get(`/nursinghomes/:id`, nursinghomesController.show)

// ========PATIENTS========
router.get(`/patients`, patientsController.index)
router.get(`/patients/:id`, patientsController.show)



// ==============DRUGS===================
router.get(`/drugs`, drugsController.index)
router.get(`/drugs/:id`, drugsController.show)

router.post(`/drugs`, drugsController.create)
router.get(`/drugs`, drugsController.new)

router.get(`/drugs/:id`, drugsController.edit)
router.put('/drugs/:id', drugsController.update)





// this is my router and im going to export its capabilities to the rest of these files
module.exports = router