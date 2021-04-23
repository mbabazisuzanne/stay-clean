let validation = (event) => {
//Declaring form elements.
    var userName = document.register.username;
    var userEmail = document.register.email;
//Regular expressions to be used for user name and email.
    const usernameRegex = /^[A-Z a-z]+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Validating the user name.
    if (userName.value == "") {
        userName.focus();
        userName.style.border = "2px solid red";
        alert("Please enter a valid user name.");
        return false;
      }
      if (userName.value.length < usernameRegex) {
        userName.focus();
        userName.style.border = "2px solid red";
        alert("Please enter a valid user name.");
        return false;
      }
      if (userName.value.length > maxWord) {
        userName.focus();
        userName.style.border = "2px solid red";
        alert("Please enter a valid user name.");
        return false;
      }
      if (!userName.value.match(usernameRegex)) {
        userName.focus();
        userName.style.border = "2px solid red";
        // alert("Please begin name with STC and any number.");
        return false;
      }
//validating the email of a user.
      if (userEmail.value.length == ""){
          userEmail.focus();
          userEmail.style.border = "2px solid red";
          alert("Please enter a valid email.")
      }
      if (userEmail.value.length < emailRegex) {
        userEmail.focus();
        userEmail.style.border = "2px solid red";
        alert("Please enter a valid user name.");
        return false;
      }
}

