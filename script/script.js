var dataCollection = {};

var submit = document.getElementById('submit');
submit.addEventListener('click',function(event) {
        var RegError;
         event.preventDefault();

var FirstName = document.getElementById('FirstName').value;
if (FirstName === "") {
        RegError = "Please input FirstName";
        document.getElementById('fn').innerHTML = RegError;
}
else {
        dataCollection.FirstName = FirstName;
}

var LastName = document.getElementById('LastName').value;
if (LastName === "") {
        RegError = "Please input LastName";
        document.getElementById('ln').innerHTML = RegError;     
}
else {
        dataCollection.LastName = LastName;
}

var UserName = document.getElementById('UserName').value;
if (UserName === "") {
        RegError = "Please input UserName";
        document.getElementById('un').innerHTML = RegError;     
}
else {
        dataCollection.UserName = UserName;
}

var EMail = document.getElementById('EMail').value;
if (EMail === "") {
        RegError = "Please input EMail";
        document.getElementById('em').innerHTML = RegError;     
}
else {
        dataCollection.EMail = EMail;
}

var Password = document.getElementById('Password').value;
if (Password === "") {
        RegError = "Please input Password";
        document.getElementById('pw').innerHTML = RegError;     
}
else {
        dataCollection.Password = Password;
}

var Password2 = document.getElementById('Password2').value;
if (Password2 === "") {
        RegError = "Please Confirm Password";
        document.getElementById('cpw').innerHTML = RegError;     
}
else {
        dataCollection.Password2 = Password2;
}

if(RegError === undefined) {
location.href = "index.html";
}

localStorage.setItem("registeration",JSON.stringify(dataCollection));
console.log(dataCollection);
});


var dataCollection = {};

var Login = document.getElementById('login');
Login.addEventListener('click',function(event) {
         var RegError;
         event.preventDefault();

var UserName1 = document.getElementById('UserName1').value;
if (UserName1 === "") {
        RegError = "Please input UserName";
         document.getElementById('un1').innerHTML = RegError;     
}
else {
        dataCollection.UserName1 = UserName1;
}

var Password1 = document.getElementById('Password1').value;
if (Password1 === "") {
        RegError = "Please input Password";
        document.getElementById('pw1').innerHTML = RegError;     
}
else {
        dataCollection.Password1 = Password1;
}

if(RegError === undefined) {
location.href = "index.html";
}

localStorage.setItem("login",JSON.stringify(dataCollection));
console.log(dataCollection);
})


var dataCollection = {};

var save = document.getElementById('save');
save.addEventListener('click',function(event) {
        var RegError;
        event.preventDefault();

var note = document.getElementById('note').value;
if (note === "") {
        RegError = "Please type your Memory Note";
        document.getElementById('mn').innerHTML = RegError;     
}
else {
        dataCollection.note = note;
}

if(RegError === undefined) {
location.href = "datasave.html";
}

// var date = document.getElementById('Date').value;
//         dataCollection.date = date;

localStorage.setItem("note",JSON.stringify(dataCollection));
console.log(dataCollection);
});