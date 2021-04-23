//Regular expressions to be used for name and phone number.
const usernameRegex = /^[A-Z a-z]+$/;
const contactRegex = /^[0-9a-zA-Z+]+$/;

let phoneNumber = () =>{
    var telephone = document.signup.tele;
    const telephoneplain = /^[0-9a-zA-Z]+$/;
    if (telephone.value.match(telephoneplain)){
    }
    else {
        telephone.focus();
        telephone.style.border = '2px solid red';
        //alert('Please enter a valid phone number.')
    }
    
}