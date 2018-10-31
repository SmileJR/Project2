const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const drugsController = {
    index: (req, res) => {
        Drug.find() //find all the drugs
            .then((drugs) => {
                res.render('drugs/index', { 
                    drugs: drugs
                })
            })
        },
    new: (req, res) => {
        res.render('drugs/new')
            },
        
    show: (req, res) => {
        Drug.findById(req.params.id).then((drug) => {
            res.render('drugs/show', { drug: drug })
        })
    },
    create: (req, res) => {
        // console.log("body",req.body)
        Drug.create(req.body).then((newDrug) => {
            // res.redirect(`/drugs/${newDrug._id}`)
            res.redirect(`/drugs`)
        })
    },
    edit: (req, res) => { //this function renders the edit.hbs page and send that drugs data to it
        Drug.findById(req.params.id).then(drug => {
            res.render('drugs/edit', { drug: drug })
        })
    },
    update: (req, res) => {
        Drug.findByIdAndUpdate(req.params.id, req.body).then((updatedDrug) => {
            res.redirect(`/${updatedDrug._id}`)
        })
    },
    delete: (req, res) => { 
        Drug.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/`)
        })
    }

}




module.exports = drugsController