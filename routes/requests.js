const express = require('express');
const router = express.Router();
const Requests = require('../models/Requests');

//gets customer requests 
router.get('/', (req,res) =>{
    res.render('requests',{title:'Customer Requests'})
})

//gets customer request list
router.post('/' , async(req,res) =>{
    try{
        const request =new Request(req.body);
        await request.save();
        console.log(req.body);
        res.redirect("/");
    }
    catch(err){
        console.log(err);
        res.send('Oops! something went wrong');
    }
});

router.get("/" , async (req, res) =>{
    try{
        const requestDetails = await Request.find();
        res.render("requestList" , {users: requestDetails});
    }
    catch(err){
        res.send("Failed to retrive request details");
    }
});

router.get("/update/:id" , async (req, res) =>{
    try{
        const updateRequest = await Request.findOne({ _id: req.params.id});
        res.render("updateRequest", {user: updateRequest});
    }
    catch(err){
        res.status(400).send("Unable to find item in the database");
    }
});

router.post("/update", async (req, res) => {
    try {
        await Request.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect("/requests/requestList/");
    }catch (err) {
        res.status(404).send("Unable to update item to the database")
    }
});

router.get("/delete/:id" , async (req,res) =>{
    try {
        await Request.findByIdAndDelete({_id: req.params.id});
        res.redirect("/requests/requestList");
    }catch (err) {
        res.status(400).send("Unable to delete item in the database")
    }
});


module.exports = router;