const express = require('express');
//instantiating express
const app = express(); 

app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.get('/register',(req,res)=>{res.render('register')})
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})