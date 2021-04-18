const validate = () => {
    var username = document.register.username;
    var email = document.register.email;
    var password = document.register.password;

    if (username.value.length < 2) {
        alert("please the first name must be atleast 3 letters");
        return false;
      }
      let min = 2;
      if (username.value.length < min){
          username.style.border = "2px solid red";
          return false;
      }
      var letters =/^[a-zA-Z].*[\s\.]*$/;
      if (username.value.match(letters)){
          return true;
      }
      else {
          alert("Please dont include numbers in your name");
          username.style.border = "2px solid red";
          return false;
      }
    if(email.value == ""){
        email.style.border = "2px solid red";
        email.focus();
        }
        let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(email)){
        return true;
        }
    else{
        alert("Invalid email, please input a valid email.");
    }
    
    if(password.value == ""){
        
    }
}