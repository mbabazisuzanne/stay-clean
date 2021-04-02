const express = require('express');
const router = express.Router();
const passport = require('passport');
const Registration = require('../models/Registration')
router.get('/', (req,res) => {
    res.render('register',{title:'Registration'} )
})
router.post('/', async(req, res) => {
    try {
        const registration = new Registration(req.body);
        await Registration.register(registration, req.body.password, (err) => {
            if (err)
              { 
               throw err
              }
            res.redirect('/login')
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})


module.exports = router;