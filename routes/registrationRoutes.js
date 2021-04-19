const express = require("express");
const router = express.Router();
const passport = require('passport');
const Registration = require("../models/Registration");
router.get("/", (req, res) => {
  res.render("register", { title: "Registration" });
});
router.post("/", async (req, res) => {
        const register = new Registration(req.body);
        register.save().then(Hey => {
            // res.send('Registered successfully.');
            res.redirect('/login');
        })
        .catch(err => {
            res.status(400).send("Sorry! Something went wrong.");
            console.log(err);
        })   
});
router.post('/', passport.authenticate('local',{failureRedirect: '/register'}),(req,res)=>{
    req.session.user = req.user;
    res.redirect('/login');
})

module.exports = router;
