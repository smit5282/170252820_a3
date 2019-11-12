

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

function validateCountry() {

  var country = document.getElementById("country".value;)

  var test = re.test(String(country).toLowerCase());

  if (country == "") {
    alert("Empty country.")

    document.getElementById("country").value;

    return false;
  }

  return true;
}



function validateDescription() {

  var description = document.getElementById("description".value;)

  var test = re.test(String(description).toLowerCase());

  if (description == "") {
    alert("Empty description.")

    document.getElementById("description").value;

    return false;
  }

  return true;
}


function validateForm() {

  if (!validateEmail()) {
    return false;
  }

  if (!validateCountry()) {
    return false;
  }

  if (!validateDescription()) {
    return false;
  }

  return true;
}
