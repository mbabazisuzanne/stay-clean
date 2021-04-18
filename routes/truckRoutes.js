const express = require('express');
const router = express.Router();
const Trucks = require('../models/Trucks');

router.get('/',(req,res)=>{
    res.render('truckReg',{title:'Truck Registration'})
});
router.get('/truckList', async(req,res)=>{
    try{
        const truckRegistration = await truckReg.find();
        res.render('truckList',{users:truckRegistration, title:'truckRegistration'});
    }
    catch(err){
        res.send('Cannot access truck details')
    }
});

module.exports = router;