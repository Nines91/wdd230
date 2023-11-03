//Getting info from the form rate option.
    const rangevalue = document.getElementById("rangevalue");
    const rate = document.getElementById("rate");

// RANGE event listener
    rate.addEventListener('change', displayRatingValue);
    rate.addEventListener('input', displayRatingValue);

    function displayRatingValue() {
        rangevalue.innerHTML = rate.value;
    }

//Validating the confirm password field
const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("pwd2");
const message = document.getElementById("formmessage");

confirmPassword.addEventListener("focusout", checkingPassword);

function checkingPassword() {

    if ( password.value !== confirmPassword.value || password.value == "") {
        message.textContent = "❌ The passwords do not match";
        message.style.visibility = "show";
        message.style.backgroundColor = "#445ba9";
        message.style.color = "gold";
        confirmPassword.style.backgroundColor = "rgba(255, 0, 0, 0.200)";
        confirmPassword.style.borderLeft = "8px solid red";
        confirmPassword.style.borderRight = "8px solid red";
        confirmPassword.value = '';
        confirmPassword.focus();
    } else {
        message.style.display = "none";
        confirmPassword.style.backgroundColor = "rgba(0, 128, 0, 0.200)";
        confirmPassword.style.borderLeft = "8px solid green";
        confirmPassword.style.borderRight = "8px solid green";
    };
};

// Validating email address
// Get our input reference.
var userEmail = document.getElementById("email");

// Define our regular expression.
var validEmail = /[a-zA-Z0-9._%+-]+@byui\.edu$/;

userEmail.addEventListener("focusout", validateEmail);

function validateEmail(){            
	// Using test we can check if the text match the pattern
	if( validEmail.test(userEmail.value) ){
		return true;
	}else{     
        alert("The email address must come from the byui.edu domain. Please enter a valid email");
        userEmail.value = '';
		return false;
	}
};




