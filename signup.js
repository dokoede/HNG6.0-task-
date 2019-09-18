(function (){
    //this will make other part of the page blur out a little while the user is typing in name
var userName = document.getElementById("name"); //to access the name input
userName.addEventListener("focus", nameFunction); //if name gains focus, run nameFunction
function nameFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //reduces opacity of form
  document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of password
  document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of email
  document.getElementById("phone").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of phone
  document.getElementById("name").style.backgroundColor = "rgba(255, 255, 255, 1)"; //maintains opacity of name
}
//this will make other part of the page blur out a little while the user is typing in email
var eMail = document.getElementById("email"); //to access the email input
eMail.addEventListener("focus", myFunction); //if email gains focus, run myFunction
function myFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //reduces opacity of form
  document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of password
  document.getElementById("phone").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of phone
  document.getElementById("name").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of name
  document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 1)"; //maintains opacity of email input
}
//this will make other part of the page blur out a little while the user is typing in password
var passWord = document.getElementById("password"); //to access the password input
passWord.addEventListener("focus", thisFunction); //if password gains focus, run myFunction
function thisFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //reduces opacity of the form
  document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of email
  document.getElementById("phone").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of phone
  document.getElementById("name").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of name
  document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 1)"; //maintains opacity of password input
}
//this will make other part of the page blur out a little while the user is typing in phonenumber
var phoneNumber = document.getElementById("phone"); //to access the phonenumber input
phoneNumber.addEventListener("focus", phoneFunction); //if phonenumber gains focus, run phoneFunction
function phoneFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //reduces opacity of the form
  document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of email
  document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of password
  document.getElementById("name").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of name
  document.getElementById("phone").style.backgroundColor = "rgba(255, 255, 255, 1)"; //maintains opacity of phone input
}
userName.addEventListener("blur", thatFunction); //if name loses focus, run thatFunction
eMail.addEventListener("blur", thatFunction); //if email loses focus, run thatFunction
passWord.addEventListener("blur", thatFunction); //if password loses focus, run thatFunction
phoneNumber.addEventListener("blur", thatFunction); //if phone number loses focus, run thatFunction
function thatFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 1)"; //make form opaque
}
/*"a" in "rbga" stands for opacity*/
}())