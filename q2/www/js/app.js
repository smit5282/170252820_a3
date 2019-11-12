

function validateEmail() {

  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Please enter a valid email address.')

    document.getElementById("email").focus();

    return false;
  }

  if (email == '') {
    alert('Please enter a valid email address.');
    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  var re = /^[A-Za-z]+(?:[ _-][A-Za-z0-9]+)*$/;

  var test = re.test(username);

  if (!test) {
    alert('Please enter a valid username.');
    return false;
  }
  if (username == '') {
    alert('Please enter a valid username.');
    return false;
  }
  if (username.includes(' ')) {
    return false;
  }
  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  var re = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;

  var test = re.test(password);

  if (!test) {
    alert('Please enter a valid password');
    return false;
  }
  if (password == '') {
    alert('Please enter a valid password');
    return false;
  }
  return true;
}

function validateForm() {

  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}

function showPassw() {
  var x = document.getElementById("password");

  if (x.type === "password") {
    x.type = "text";
  }
  else {
    x.type = "password";
  }
}
