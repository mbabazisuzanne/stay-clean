const express = require('express');
const router = express.Router();
var multer = require('multer');
var upload = multer({dest:'uploads/'});

router.get('/addEmployees', (req,res) => {
    res.render('addEmployees',{title:'Create Employee'} )
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

router.post('/addEmployee', upload.single('imageupload'), (req, res) => {
    try {
        console.log(req.body)
        // res.send(req.file);
    } catch (err) {
        res.send(400);
    }
})
module.exports = router;