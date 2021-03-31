const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req,res) => {
    res.render('login',{title:'LoginPage'} )
})
// checks username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/employee');
});
module.exports = router;