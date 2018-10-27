require('dotenv').config();
const mongoose = require('mongoose')

// Do I use this one?
// mongoose.connect('mongodb://localhost/Project2')
// mongoose.connection.once('open', () => {
//     console.log('Mongoose has connected to MongoDB')
// })


//Or do I use this one?
mongoose.connect(process.env.MONGODB_URI).then(() => {
console.log('Connected to MongoDB')
})

module.exports = mongoose
