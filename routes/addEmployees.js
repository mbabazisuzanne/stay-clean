const express = require('express');
const router = express.Router();
const employee = require('../models/employee')
var multer = require('multer');
var upload = multer({dest:'uploads/'});

//gets employee
router.get('/addEmployees', (req,res) => {
    res.render('addEmployees',{title:'Create Employee'} )
})

//gets employee list
router.get('/', async (req, res) => { 
    try{
        //find all data in database 
        const employeeDetails = await Employee.find();
        res.render('employeeList', {users:employeeDetails, title: 'EmployeeList'});
       
    }catch(err){
        res.send('Failed to retireve Employee Details')
    }
});

router.post('/addEmployees', upload.single('imageupload'), (req, res) => {
    try {
        console.log(req.body)
        // res.send(req.file);
    } catch (err) {
        res.send(400);
        console.log("failed")
    }
})
//image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

// router.post('/addEmployees', upload.single('imageupload'), (req, res) => {
//     const employee = new Employee(req.body);
//     employee.imageupload = req.file.path;
//     employee.save()
//     .then(() => { res.send('Registered successfully!')})
//     .catch((err) => {
//         console.log(err);
//         res.send('Sorry! Something went wrong.');
//     })
// })
router.post('/addEmployees', upload.single('imageupload'), async (req, res) => {
try{
    console.log(req.body);
    const employee = new Employee(req.body);
  
employee.imageupload = req.file.path;
    //await code performing database operation 
    await employee.save()
    
    res.redirect('/employee')
} catch(err){

    console.log(err);
    res.send('Sorry! Something went wrong.');
}

})
module.exports = router;