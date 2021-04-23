let validation = (event) =>{
    //Declaring form elements
    var fullName = document.addEmployees.username;
    var birthDate = document.addEmployees.DoB;
    var sex = document.addEmployees.gender;
    var driverLicense = document.addEmployees.license;
    var nationalID = document.addEmployees.nin;
    var role = document.addEmployees.role;

//Employee minimum Age 
const employeeAge = 18;

//Date declaration
const date = Date.now();

//Minimum values for validating name, NIN, max words and contact.
const minName = 2;
const minNin = 13;
const maxWord = 50;
const minContact = 10;

//Validating the employee's name.
if (fullName.value == "") {
    fullName.focus();
    fullName.style.border = "2px solid red";
    alert("Please enter a valid name,at least 2 characters.");
    return false;
  }
  if (fullName.value.length < minName) {
    fullName.focus();
    fullName.style.border = "2px solid red";
    alert("Please enter a valid name,at least 2 characters.");
    return false;
  }
  if (fullName.value.length > maxWord) {
    fullName.focus();
    fullName.style.border = "2px solid red";
    alert("Please enter a valid name.");
    return false;
  }

//validation for date of birth.
  if (birthDate.value == "") {
  birthDate.focus();
  birthDate.style.border = "2px solid red";
  alert("Please enter correct date of birth.");
  return false;
  }

  if (sex.value == "Choose") {
  sex.focus();
  sex.style.border = "2px solid red";
  alert("");
  return false;
  }

  if (driverLicense.value == "") {
  driverLicense.focus();
  driverLicense.style.border = "2px solid red";
  alert("Please enter a valid license.");
  return false;
  }

  if (nationalID.value.length < minNin) {
  nationalID.focus();
  nationalID.style.border = "2px solid red";
  alert("Please enter a valid national ID.");
  return false;
  }

  if(role.value == "Choose"){
    role.focus();
    role.style.border = "2px solid red";
    alert("Please select a role.");
    return false;
  }
}
