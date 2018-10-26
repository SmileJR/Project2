const express = require('express')
//requireing express
const router = express.Router()
// applicationController is the main entry point to application file
const applicationController = require('../controllers/application')
// after making the variable of application controller I need to make an actual controller file