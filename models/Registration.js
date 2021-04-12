const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({ 
    username: {
        type: String
        // required: 'Please enter your name'
    },

})

//export the mongoose model
module.exports = mongoose.model('Registration', registrationSchema);