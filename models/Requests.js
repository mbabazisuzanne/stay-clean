const mongoose = require('mongoose');

const requestsSchema = new mongoose.Schema({
    customername: {
        type: String
        // required: 'Please enter your name'
    },
    NIN:{
        type: String,
        unique: true
    },
    address:{
        type:String
    },
    telnumber: {
        type: String,
        unique: true
    
    },
    servicereq: [{
        type: String,
    }],
    typeOfRequest:[{
        type: String
    }],
    numberOfTrucks:String,
    timeOfRequest:String
    
});

module.exports = mongoose.model('Requests',requestsSchema);