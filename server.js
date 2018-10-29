require('dotenv').config()
// This is all just boiler plate for the serve page
const express = require('express')
const app = express()
//method override as a requirement
const methodOverride = require(`method-override`)
const routes = require('./routes/index')
const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGODB_URI)


// Connection to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/my-database-name');
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//THIS CODE IS CAUSING THE SERVER TO CRASH
app.use(`/`, routes)
// This is part of the requirement portion
app.use(methodOverride('_method'))
// i want the views to be available through handlebars
//THIS CODE IS CAUSING THE SERVER TO CRASH


app.set(`view engine`, `hbs`)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
//This is the end of the boiler plate of the server.js file