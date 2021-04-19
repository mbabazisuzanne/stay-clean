const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const loginSchema = new mongoose.Schema({
    username: {
      type: String
      // required: 'Please enter your name'
      },
    password: {
      type: String
  }
  });

loginSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Login', loginSchema);