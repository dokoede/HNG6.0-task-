//this will make other part of the page blur out a little while the user is typing in email
var eMail = document.getElementById("email"); //to access the email input
eMail.addEventListener("click", myFunction); //creating function to run when email is clicked to enter mail
eMail.addEventListener("focus", myFunction); //if email gains focus, run myFunction
function myFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //reduces opacity of form
  document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of password
  document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 1)"; //maintains opacity of email input
}
//this will make other part of the page blur out a little while the user is typing in password
var passWord = document.getElementById("password"); //to access the password input
passWord.addEventListener("click", thisFunction); //creating function to run when password is clicked to enter password
passWord.addEventListener("focus", thisFunction); //if password gains focus, run myFunction
function thisFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //reduces opacity of the form
  document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 0.5)"; //reduces opacity of email
  document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 1)"; //maintains opacity of password input
}
window.addEventListener("click", function (event) { //return opacity of form to 1 when you click outside email or password
  if (event.target.matches("#email")) {
    return myFunction; //if email is clicked, run myFunction
  } else if (event.target.matches("#password")) {
    return thisFunction; //if password is clicked, run thisFunction
  } else {
    document.getElementById("content").style.backgroundColor = "rgba(255, 255, 255, 1)"; //else, make the whole content opaque
  }
});
eMail.addEventListener("blur", thatFunction); //if email loses focus, run thatFunction
passWord.addEventListener("blur", thatFunction); //if password loses focus, run thatFunction
function thatFunction() {
  document.getElementById("form").style.backgroundColor = "rgba(255, 255, 255, 1)"; //make form opaque
}
/*"a" in "rbga" stands for opacity*/