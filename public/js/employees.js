// Worker Minimum Age 
const employeeAge = 18;

// Date declaration
const date = Date.now();

// Accessing the input fields in the addEmployees view file.
const fullName = document.addEmployees.username;
const birthDate = document.addEmployees.DoB;
const sex = document.addEmployees.gender;
const driverLicense = document.addEmployees.license;
const nationalID = document.addEmployees.nin;
const role = document.addEmployees.role;


// Error message display
// First name field error message
const userNameError = (message)=>{
    let fname_Err = document.getElementById('fName');
    fname_Err.innerText = message
}

// National Identity number Error Message
const ninError = (message)=>{
    let nin_Err = document.getElementById('valNIN');
    nin_Err.innerText = message
}

// Driver d_lic Error Message
const dLicenError = (message)=>{
    let dlError = document.getElementById('drleRR');
    dlError.innerText = message
}

// Date of Birth Error Message
const dateOfBirthError = (message)=>{
    let dateOfBirth_Err = document.getElementById('dOB');
    dateOfBirth_Err.innerText = message
}

// Gender field Error message
const genderError = (message)=>{
    let gender_Err = document.getElementById('wGend');
    gender_Err.innerText = message
}

// Role field Error message
const roleError = (message)=>{
    let role_Err = document.getElementById('role');
    role_Err.innerText = message
}



// Event Listeners for the constants

firstName.addEventListener('blur',firstName_verify,true);
lastName.addEventListener('blur',lastName_verify,true);
nin.addEventListener('blur',niN_verify,true);
d_lic.addEventListener('blur',dLicense_verify,true);
dofBirth.addEventListener('blur',dOb_verify,true);

// Validations

function validate(){
    // First Name field validation
    if(fullName.value == ''){
        fullName.style.border = '2px solid red';
        firstNameError('Please enter your name.');
        fullName.focus();
        return false;
    }

    // National Identity Number field validation
    if(nationalID.value == ''){
        nationalID.style.border = '2px solid red';
        ninError('Please insert a National Identity Number');
        nationalID.focus();
        return false;
    }

    // Drivers License field validation
    if(driverLicense.value == ''){
        driverLicense.style.border = '2px solid red';
        dLicenError('Please insert a Driver\`s License');
        driverLicense.focus();
        return false;
    }

    // Date of birth field validation
    if(birthDate.value == ''){
        birthDate.style.border = '2px solid red';
        dateOfBirthError('Please select Date of Birth');
        birthDate.focus();
        return false;
    }

    // Gender field validation
    if(sex.value === 'false'){
        sex.style.border = '2px solid red';
        genderError('Please select a Gender !');
        sex.focus();
        return false;
    }

    // Role field validation

    if(role.value === 'false'){
        role.style.border = '2px solid red';
        roleError('Please select a role');
        role.focus();
        return false;
    }

    // // Driver Age specification
    //
    // if(sex.value === Driver && (dofBirth.value <= 1990)){
    //     dofBirth.style.border = '1px solid red';
    //     dateOfBirthError('Driver should atleast be 30 years of Age');
    //     dofBirth.focus();
    //     sex.focus();
    //
    // }

}

// Regular Expressions
const nameRegExp = /[A-Z][a-z]{2,50}/; // Regular expression for names
const ninRegExp = /([C-M][0-9A-Z0-9A-Z]{14})/;//regular Expression for National Id


// Event Handlers

// First Event Handler
function firstName_verify(){
    if(fullName.value != '' && fullName.value.match(nameRegExp)){
        fullName.style.border = '1px solid green';
        firstNameError('');
        return true;
    }
    else{
        fullName.style.border = '2px solid red';
        firstNameError('Name should have letters only, and have atleast 2 characters, atmost 50 characters');
        fullName.focus();
        return false;
    }
}

// National Identity number Event Handler
function niN_verify(){
    if(nationalID.value != '' && nationalID.value.match(ninRegExp)){
        nationalID.style.border = '1px solid green';
        ninError('');
        return true;
    }
    else{
        nationalID.style.border = '2px solid red';
        ninError('Please insert a valid NIN');
        nationalID.focus();
        return false;
    }
}


// Drivers License Event Handler
function dLicense_verify(){
    if(drivebirthDate.value != ''){
        drivebirthDate.style.border = '1px solid green';
        dLicenError('');
        return true;
    }
    else{
        drivebirthDate.style.border = '2px solid red';
        dLicenError('Please insert a valid Drivers License');
        drivebirthDate.focus();
        return false;
    }
}


// Date of Birth Event Handler
function dOb_verify(){

    if(birthDate.value != ''){
        birthDate.style.border = '1px solid green';
        dateOfBirthError('');
        return true;
    }

    else{
        birthDate.style.border = '2px solid red';
        dateOfBirthError('Please insert a valid date of birth');
        birthDate.focus();
        return false;
    }

}


// Gender Event Handler
// function genderVerify(){
//     if(sex.value != ''){
//         genderError('');
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// // Roles Event Handler
// function role_verify(){
//     if(role.value != ''){
//         roleError('');
//         return true;
//     }
//     else{
//         return false;
//     }
// }


