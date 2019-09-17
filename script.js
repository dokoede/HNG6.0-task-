(function(){
  var eMail = document.getElementById("email");
  eMail.addEventListener("focus", emailFunction);
  function emailFunction() {
    document.getElementById("loginform").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 1)"
  }
  var passWord = document.getElementById("password");
  passWord.addEventListener("focus", passFunction);
  function passFunction() {
    document.getElementById("loginform").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 1)"
  }
  eMail.addEventListener("blur", homeFuction);
  passWord.addEventListener("blur", homeFuction);
  function homeFuction() {
    document.getElementById("loginform").style.backgroundColor = "rgba(255, 255, 255, 1)"
  }
}())