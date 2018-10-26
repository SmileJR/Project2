const express = require('express')
//requireing express
const router = express.Router()
// applicationController is the main entry point to application file
const applicationController = require('../controllers/application')
// after making the variable of application controller I need to make an actual controller file


// now im going to make a route to my application controller
router.get(`/`, applicationController.index)

// this is my router and im going to export its capabilities to the rest of these files
module.exports = router