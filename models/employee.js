//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const employeeSchema = new mongoose.Schema({ 
    username: {
        type: String
        // required: 'Please enter your name'
    },
    gender: String,
    DoB:{
        type: String,
    },
    nin: {
        type: String,
        unique: true
        // required: 'Please enter your  NIN'
    },
    residence: {
        type: String,
    },
    license: {
        type: String,
        unique: true,
        // required: 'Please enter your license number'
    },
    incidences:[{
        type: String
    }],
    imageupload: String,
    role: String

})

//export the mongoose model
module.exports = mongoose.model('Employee', employeeSchema);