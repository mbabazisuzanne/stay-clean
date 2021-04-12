const express = require('express');
const router = express.Router();
const Requests = require('../models/Requests');

//gets customer requests 
router.get('/requests', (req,res) =>{
    res.render('requests',{title:'Customer Requests'})
})

//gets customer request list
router.get('/requestLists', async(req,res)=>{
    try{
        const customerRequests = await Requests.find();
        res.render('requestLists',{users:customerRequests, title:'CustomerRequests'});
    }catch(err){
        res.send('Can not access customer requets')
    }
});

module.exports = router;