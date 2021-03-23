//Dependencies
const express = require('express');

const registrationRoutes = require('./routes/registrationRoutes'); 
const loginRoutes = require('./routes/loginRoutes');
const addEmployees = require('./routes/addEmployees');

//instantiating express
const app = express(); 


app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug');
app.set('views', './views');

//middleware for serving static files 
app.use(express.static('public'));

//Routes
app.use('/register',registrationRoutes); 
app.use('/login',loginRoutes);
app.use('/addEmployees',addEmployees);


// app.get('/register',(req,res)=>{res.render('register')});
// app.get('/login',(req,res)=>{res.render('login')});
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})
