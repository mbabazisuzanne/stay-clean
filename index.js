//Dependencies
const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

//require express session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const passport = require('passport');

//instantiating express
const app = express(); 

const registrationRoutes = require('./routes/registrationRoutes'); 
const loginRoutes = require('./routes/loginRoutes');
const addEmployees = require('./routes/addEmployees');
const requests = require('./routes/requests');
const landing = require('./routes/landing')
const dashboard = require('./routes/dashboard');
const truckRoutes = require('./routes/truckRoutes');
const Registration = require('./models/Registration');

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .once('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//middleware    
//app.use(express.urlencoded({extended: false}))
app.use(express.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configurations
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

//configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware for serving static files 
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

//Routes
app.use('/register',registrationRoutes); 
app.use('/login',loginRoutes);
app.use('/addEmployees',addEmployees);
app.use('/requests',requests);
app.use('/landing',landing);
app.use('/dashboard',dashboard);
app.use('/truckReg',truckRoutes);

//importing models
require('./models/Employees');
require('./models/Login');
require('./models/Registration');
require('./models/Requests');
require('./models/Trucks');

// cater for undefined routes
app.get('*', (req, res)=> {
  res.send('The route specified doesnt exist')
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})
