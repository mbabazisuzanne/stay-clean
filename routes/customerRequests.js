const express = require('express');
const router = express.Router();

router.get('/request',(req,res) =>{
    res.render('request',{title:'Customer Requests'})
})
module.exports = router;