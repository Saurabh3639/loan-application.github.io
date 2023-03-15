// get full name parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const fullName = urlParams.get('full-name');

// split full name into first and last name
const names = fullName.split(' ');
const firstName = names[0];

// set first name in the span element
document.getElementById('firstname').textContent = firstName;

// get email parameter from URL
const email = urlParams.get('email');

// set email in the span element
document.getElementById('youremail').textContent = email;


// validate OTP input field
function validateOTP() {
  const otpInput = document.getElementById("otp");
  const otpError = document.getElementById("otp-error");
  if (otpInput.validity.valueMissing) {
    otpError.textContent = "Please enter the OTP.";
    return false;
  } else if (otpInput.validity.patternMismatch) {
    otpError.textContent = "The OTP must be a 4-digit number.";
    return false;
  } else {
    otpError.textContent = "OTP is Valid.";
    return true;
  }
}


// submit form
function submitForm() {
  if (validateOTP()) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}

