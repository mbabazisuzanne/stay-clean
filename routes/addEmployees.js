const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee')
var multer = require('multer');
var upload = multer({dest:'public/images'});

//gets employee
router.get('/', (req,res) => {
    res.render('addEmployees',{title:'Create Employee'} )
});

//image upload and storage path
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

router.post('/employeeList', upload.single('imageupload'), async (req, res) => {
    console.log(req.body);
    try {
        const employee = new Employee(req.body)
        employee.imageupload = req.file.path;
        await employee.save()
        res.redirect('/addEmployees/employeeList')
    } catch (err) {
        console.log(err);
        res.send('Sorry, something went wrong.');    
    }
});

//gets employee list
//find all data in database 
router.get('/employeeList', async (req, res) => { 
    try{
        let employeeDetails = await Employee.find();
        if(req.query.username){
            employeeDetails = await Employee.find({username:req.query.username})
        }
        res.render('employeeList', {users:employeeDetails, title: 'EmployeeList'});  
    }catch(err){
        res.send('Failed to retireve Employee Details')
    }
});
//Route for updating employees in the list.
router.get('/update/:id', async (req, res) => {
    try {
        const updateEmp = await Employee.findOne({ _id: req.params.id })
        res.render('updateDrivers', { user: updateEmp })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/update', async (req, res) => {
    try {
        await Employee.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/addEmployees/employeeList');
    } catch (err) {
        // console.log(err)
        res.status(404).send("Unable to update item in the database");
    }
})
 //Route for deleting an employee from the employee list. 
router.post('/delete/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete({_id:req.body.id});
        res.redirect('/addEmployees/employeeList');
    } catch (err) {
        res.status(404).send("Unable to delete item from the database");
    }
})

module.exports = router;



