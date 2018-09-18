$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


$(document).ready(function(){
	$('.button-login').click(function(){
		if ($('#username').val() != "" && $('#password').val() != ""){
			if ($('#username').val() == "lab3" && $('#password').val() == "lab3"){
				RedirectToHome();
				return false;
			}
			else {
				alert('Username or Password are incorrect. Please try again');
				return false;
			}
		}
		else if ($('#username').val() == "" || $('#password').val() == ""){
			var messageLog = '';
			if ($('#username').val() == ""){
				messageLog += '- username \n';
			}
			if ($('#password').val() == ""){
				messageLog += '- password';
			}
			alert('Next fields must be filled out: \n' + messageLog);

			return false;
		}

	});

	$('.button-register').click(function(){
		if ($('#First-Name').val() == "" || $('#Last-Name').val() == "" || $('#email').val() == "" ||
			$('#Password').val() == "" || $('#Password-Confirmation').val() == "" || $('#Gender').val() == "" ||
			$('#Country').val() == ""){
			
			var messageRegister = '';

			if ($('#First-Name').val() == ""){
				messageRegister += '- First Name \n';
			}
			if ($('#Last-Name').val() == ""){
				messageRegister += '- Last Name \n';
			}
			if ($('#email').val() == ""){
				messageRegister += '- Email \n';
			}
			if ($('#Password').val() == ""){
				messageRegister += '- Password \n';
			}
			if ($('#Password-Confirmation').val() == ""){
				messageRegister += '- Password Confirmation \n';
			}
			if ($('#Gender').val() == ""){
				messageRegister += '- Gender \n';
			}
			if ($('#Country').val() == ""){
				messageRegister += '- Country \n';
			}

			alert('Next fields must be filled out: \n' + messageRegister);
			return false;
		}
		else {
			RedirectToHome();
		}
	});

	$('.button-clear').click(function(){
		$('.register-form')[0].reset();
		return false;
	});
});

function RedirectToHome(){
	var url = "homepage.html";
    $(location).attr('href',url);
}

/*
function validateFormLogin(){
	var nameIn		= document.forms["myForm-login"]["user"].value;
	var passwordIn	= document.forms["myForm-login"]["password"].value;
	var messageLog	= "";

	// Here we redirect to the homepage in case the user provides the user and password correct
	if (nameIn == "lab3" && passwordIn == "lab3"){
		window.location.assign("homepage.html");
	}

	// If the user provides a username or password incorrect but the 2 fields are filled, we ask to register 
	else if ((nameIn != "lab3" || passwordIn != "lab3") && (nameIn != "" && passwordIn != "")){
		alert("Please register. The username or password provided are not found.");
	}

	// If there is a missing field, we ask the user to fill it
	else if (nameIn == "" || passwordIn == ""){
		
		if (nameIn == ""){
			if (messageLog == ""){
				messageLog += "\n";
			}
			messageLog += "- User \n";
		}
		if (passwordIn == ""){
			if (messageLog == ""){
				messageLog += "\n";
			}
			messageLog += "- Password \n";
		}
		alert("Next fields must be filled out:" + messageLog);
	}
	return false;
}

function validateFormRegister(){
	var firstNameReg	= document.forms["myForm-Register"]["First-Name"].value;
	var lastNameReg		= document.forms["myForm-Register"]["Last-Name"].value;
	var emailReg		= document.forms["myForm-Register"]["email"].value;
	var passwordReg		= document.forms["myForm-Register"]["password"].value;
	var passwordConfReg	= document.forms["myForm-Register"]["Password-Confirmation"].value;
	var genderReg		= document.getElementById('Gender').value;
	var CountryReg		= document.getElementById('Country').value;
	var messageReg		= "";

	if (firstNameReg != "" && lastNameReg != "" && emailReg != "" && passwordReg != "" && passwordConfReg != "" &&
		genderReg != "" && CountryReg != ""){
		if (!checkForPassword(passwordReg, passwordConfReg)){
			return false;
		}
		window.location.assign("homepage.html");
	}

	else if (firstNameReg == "" || lastNameReg == "" || emailReg == "" || passwordReg == "" || passwordConfReg == "" ||
		genderReg == "" || CountryReg == ""){
		
		if (firstNameReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- First name \n";
		}
		if (lastNameReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- Last Name \n"
		}
		if (emailReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- Email \n"
		}
		if (passwordReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- Password \n"
		}
		if (passwordConfReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- Password Confirmation \n"
		}
		if (genderReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- Gender \n"
		}
		if (CountryReg == ""){
			if (messageReg == ""){
				messageReg += "\n";
			}
			messageReg += "- Country \n"
		}
		alert("Next fields must be filled out:" + messageReg);
	}

	return false;
}

function checkForPassword(a, b){
	if (a != b){
		alert("Passwords are different");
		return false;
	}
	return true;
}

function clearForm(){
	document.getElementById("myForm-Register").reset();
}
*/