const express = require('express');
const passport = require('passport');
const router = express.Router();
const Login = require('../models/Login');

router.get('/login', (req,res) => {
    res.render('login',{title:'LoginPage'} )
})
// checks username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/dashboard');
});

router.post('/',  async(req,res) => {
    try{
      const login = new Login(req.body);
      await Login.login(login, req.body.password, (err) =>{
        if (err)
        {
          throw err
        }
        res.redirect('/register');
      })
    }
    catch(err){
      res.status(400).send('Oops! Something went wrong.')
      console.log(err);
    }
  })

module.exports = router;