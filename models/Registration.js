const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const registrationSchema = new mongoose.Schema({ 
    username: {
        type: String
        // required: 'Please enter your name'
    },
    email:{
        type: String
    }

})

//export the mongoose model
registrationSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('Registration', registrationSchema);