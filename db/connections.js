const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nursing-homes')

mongoose.connection.once('open', () =>{
    console.log('Mongoose is connected to MongoDB')
})

module.exports = mongoose