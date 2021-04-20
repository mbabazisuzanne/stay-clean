var fullName = document.signup.username;

let adminName = () =>{
    if (fullName.value == ''){
        fullName.style.border = '2px solid red';
        fullName.focus();
        alert('Please fill in your name');
        
    }
    const min = 2;
    if (fullName.value.length < min){
        fullName.focus();
        fullName.style.border = '2px solid red';
        // alert ('Your name should have more than four characters.');
    } if (fullName.value.length > min){
        fullName.style.border = 'none';

    }
    const letters = /^[A-Za-z]+$/;
    if (fullName.value.match(letters)){
        
    }
    else {
        fullName.focus();
        fullName.style.border = '2px solid red';
        // alert('Please use only letters.');
    }
}
var adminEmail = document.signup.email;
let userEmail = () =>{
    if(adminEmail.value = ''){
        adminEmail.style.border = '2px solid red';
        adminEmail.focus();
    }
    const emailAddress =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(adminEmail.value.match(emailAddress)){
    } 
    else{
        adminEmail.focus();
        adminEmail.style.border = '2px solid red';
       // alert('Please make sure your email is correct.');
    }
}

let Validation = () =>{
    adminName();
    userEmail();
}