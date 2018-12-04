function readValues(){
    var Name = document.getElementById("name").value;
    var email_id = document.getElementById("email").value;
    var mobile = document.getElementById("mob").value;
    var pass = document.getElementById("pwd").value;
    var cpass = document.getElementById("cpwd").value;
    if(pass == cpass){
        console.log(Name);
        console.log(email_id);
        console.log(mobile);
        console.log(pass);
        console.log(cpass);
    }
    else {
        alert("Password or confirm password doesn't match");
    }
}