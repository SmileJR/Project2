const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const drugsController = {
    index: (req, res) => {
        res.send("Hey whats up this is drugs index")
    },
    show: (req, res) => {
        res.render('drugs/show.hbs')
    },
    create: (req, res) => {
        Drug.create(req.body).then((newDrug) =>{
            res.redirect(`drugs/${newDrug._id}`)
        })
    },
    update: (req, res) => {
        res.send('Hello from drugs!!!!!! update')
      }
}




module.exports = drugsController