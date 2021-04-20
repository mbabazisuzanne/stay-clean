const express = require('express');
const router = express.Router();
const passport = require('passport');
// const Login = require('../models/Login');

// gets and displays a login page
router.get('/', (req, res) => {
  res.render('login', { title: 'LoginPage' });
});

// checks username and password using passport
router.post('/',passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/dashboard/dashboard');
  }
);
module.exports = router;



// const express = require('express');
// const passport = require('passport');
// const router = express.Router();
// const Login = require('../models/Login');

// router.get('/', (req,res) => {
//     res.render('login',{title:'LoginPage'} )
// })
// // checks username and password using passport
// router.post('/', passport.authenticate('local', {
//   successRedirect: '/dashboard/dashboard',
//   failureRedirect: '/login'}), (req,res) => {
//     // req.session.user = req.user;
// });
// router.post("/", async (req, res) => {
//   const login = new Login(req.body);
//   login.save().then(Hey => {
//       // res.send('Registered successfully.');
//       res.redirect('/dashboard/dashboard');
//   })
//   .catch(err => {
//       res.status(400).send("Sorry! Something went wrong.");
//       console.log(err);
//   })   
// });

// module.exports = router;