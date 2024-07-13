var signUpName=document.getElementById("signUpName");
var signUpPassword=document.getElementById("password1");
var signUpPassword2=document.getElementById("password2");
var signUpBtn=document.getElementById("signUpBtn");
var checkBtn=document.getElementById("check");
var checkPass=document.getElementById("check2");
var SignUpDiv=document.getElementById("Signup");
var LogInDiv=document.getElementById("Login");
var MainDiv=document.getElementById("main");
var toLogin=document.getElementById("toLogin");
var toSignUP=document.getElementById("toSignUP");
var LoginBtn=document.getElementById("LoginBtn");
var LoginEmail=document.getElementById("email");
var LoginPassword=document.getElementById("password");
var messageLogin=document.getElementById("messageLogin");
var logOutBtn=document.getElementById("logOut");
var StartLogin=document.getElementById("StartLogin");
var StartSignUp=document.getElementById("StartSignUp");
var chooseDiv=document.getElementById("choose");
var regex_email=/^\w{5,}@gmail\.com$/i;
var regex_pass=/^[A-Z][\w!@#$%^&]{7,15}$/i;
var Users=[];


StartSignUp.addEventListener("click",function(){
    SignUpDiv.classList.remove("d-none");
    SignUpDiv.classList.remove("d-none");
    chooseDiv.classList.add("d-none");
    document.getElementById("header1").classList.remove("d-none");

})
StartLogin.addEventListener("click",function(){
    LogInDiv.classList.remove("d-none");
    chooseDiv.classList.add("d-none");
    document.getElementById("header1").classList.remove("d-none");

})

if(localStorage.getItem("USERS")!=null){
Users=JSON.parse(localStorage.getItem("USERS"));
}

function validate(x,regex){
    if(regex.test(x.value)){
        x.classList.add("is-valid");
        x.classList.remove("is-invalid");
        
        return true;

    }
    else{
        x.classList.add("is-invalid");
        x.classList.remove("is-valid");
        
        return false;

    }
}

function correct_password(){
if(signUpPassword.value==signUpPassword2.value){
    return true;
}
else{
    return false;
}
}

function check(x,mylist){
    if(mylist.length==0){
        return true;
    }
    for (var i = 0; i < mylist.length; i++) {
    if(mylist[i].email==x){
        return false;
    }
        
    }
    return true;

}


function clear(){
    signUpName.value="";
    signUpPassword.value="";
    signUpPassword2.value="";
    LoginEmail.value="";
    LoginPassword.value="";
    signUpName.classList.remove("is-valid");
    signUpPassword.classList.remove("is-valid");
    checkBtn.classList.add("d-none");
    checkPass.classList.add("d-none");
    LoginEmail.classList.remove("is-invalid");
    LoginPassword.classList.remove("is-invalid");
    messageLogin.classList.add("d-none");
}

signUpName.addEventListener("keyup",function(){
        validate(signUpName,regex_email);
})
signUpPassword.addEventListener("keyup",function(){
        validate(signUpPassword,regex_pass);
})

signUpBtn.addEventListener("click",function(){


     if(signUpName.value==""){
        checkPass.innerHTML="You must add all fields ";
        checkPass.classList.remove("d-none");
        signUpName.classList.add("is-invalid");

    }
     if(signUpPassword.value==""){
        checkPass.innerHTML="You must add all fields ";
        checkPass.classList.remove("d-none");
        signUpPassword.classList.add("is-invalid");

    }
     if(signUpPassword2.value==""){
        checkPass.innerHTML="You must add all fields ";
        checkPass.classList.remove("d-none");
        signUpPassword2.classList.add("is-invalid");


    }









    if(check(signUpName.value,Users)==false){
        checkBtn.classList.remove("d-none");
    }
    else if(correct_password()==false){
        checkPass.classList.remove("d-none");
    }
   
    else if(signUpName.classList.contains("is-valid")&&signUpPassword.classList.contains("is-valid")){
        var user={
            email:signUpName.value,
            password:signUpPassword.value
        };
        Users.push(user);
        localStorage.setItem("USERS",JSON.stringify(Users));
        clear();
        SignUpDiv.classList.add("d-none");
        MainDiv.classList.remove("d-none");
        change_header();


    }


})
/*********************************************************************************************************** */

toLogin.addEventListener("click",function(){
    SignUpDiv.classList.add("d-none");
    LogInDiv.classList.remove("d-none");
})




toSignUP.addEventListener("click",function(){
    SignUpDiv.classList.remove("d-none");
    LogInDiv.classList.add("d-none");
})


function validateLogin(x,y,mylist){
    for (var i=0;i<mylist.length;i++){
        if(mylist[i].email==x.value&&mylist[i].password==y.value){
            return true;
        }
    }
    return false;

}



LoginBtn.addEventListener("click",function(){

    if(validateLogin(LoginEmail,LoginPassword,Users)){
        LogInDiv.classList.add("d-none");
        MainDiv.classList.remove("d-none");  
        change_header();
        clear();
      }
    else{
        if(LoginEmail.value==""){
            messageLogin.classList.remove("d-none");
            messageLogin.innerHTML="You must add all fields ";
            LoginEmail.classList.add("is-invalid");
        }
        if(LoginPassword.value==""){
            messageLogin.classList.remove("d-none");
            messageLogin.innerHTML="You must add all fields ";
            LoginPassword.classList.add("is-invalid");
        }
        else{
            messageLogin.innerHTML="Sorry! Email or Password is incorrect ";

            LoginEmail.classList.add("is-invalid");
            LoginPassword.classList.add("is-invalid");
            messageLogin.classList.remove("d-none");
        }
       
    }
})

function change_header(){
    document.getElementById("header1").classList.add("d-none");
    document.getElementById("header2").classList.remove("d-none");
}


logOutBtn.addEventListener("click",function(){
    document.getElementById("header2").classList.add("d-none");
    document.getElementById("header1").classList.remove("d-none");
    LogInDiv.classList.remove("d-none");
    MainDiv.classList.add("d-none");  
    clear();

})




