const Drug = require(`../models/Drug`)
const NursingHome = require(`../models/NursingHome`)
const Patient = require(`../models/Patient`)

const nursinghomesController = {
    index: (req, res) => {
        NursingHome.find() //find all the nursing homes
        .then((nursinghomes) => {
        res.render(`nursinghome/index`, {
            nursinghomes: nursinghomes
            })
        })
    },
    show: (req, res) => {
        NursingHome.findById(req.params.id).then((nursinghomes) => {
        res.render('nursinghome/show', {nursinghomes: nursinghomes})
    })
}
    
}




module.exports = nursinghomesController