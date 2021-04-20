// const fullName = document.addEmployees.username;
// const birthDate = document.addEmployees.DoB;
// const sex = document.addEmployees.gender;
// const driverLicense = document.addEmployees.license;
// const nationalID = document.addEmployees.nin;
// const role = document.addEmployees.role;

var userName = document.addEmployees.username;

let employeeName = () =>{
    if (userName.value == ''){
        userName.style.border = '2px solid red';
        userName.focus();
        
    }
    const min = 2;
    if (userName.value.length < min){
        userName.focus();
        userName.style.border = '2px solid red';
    } if (userName.value.length > min){
        userName.style.border = 'none';

    }
    const letters = /^[A-Za-z]+$/;
    if (userName.value.match(letters)){
        
    }
    else {
        userName.focus();
        userName.style.border = '2px solid red';
    }
}

let dateOfBirth = () =>{
    var dob = document.addEmployees.DoB;
    if(dob.value = ''){
        dob.style.border = '2px solid red';
        dob.focus();
    }
}


let gender = () =>{
    var sex = document.addEmployees.gender;

}

let Employees = () =>{
    employeeName();
    dateOfbirth();
    gender();
}