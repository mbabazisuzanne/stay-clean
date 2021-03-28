//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const registrationRoutes = require('./routes/registrationRoutes'); 
const loginRoutes = require('./routes/loginRoutes');
const addEmployees = require('./routes/addEmployees');

//instantiating express
const app = express(); 

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .once('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//middleware    
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug');
app.set('views', './views');

// app.use((req, res, next) => {
//     console.log('a new request received at ' + Date.now());
//     next();
//   });
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
