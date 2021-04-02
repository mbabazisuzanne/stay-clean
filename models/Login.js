const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: 'Please Enter User name' 
    }
  });

loginSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model('Login', loginSchema);