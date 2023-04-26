/*********************
    
	Project 4
	Name: Scot Motuz
	Date: 2023-04-26

*********************/

function validate(e) {
	hideErrors();

	if (formHasErrors()) {
		e.preventDefault();

		return false;
	}

	return true;


}

function resetForm(e) {
	if (confirm('Reset?')) {
		hideErrors();
		return true;
	}

	e.preventDefault();

	return false;
}

function formFieldHasInput(str) {
	if (str.trim().length == 0) {
	  return false;
	} else {
	  return true;
	}
  }

function formHasErrors() {
	let errorFlag = false;

	let textFields = ["fullname","address","city","postal","email","phone"]
	
	for(let i=0;i<textFields.length;i++){
		let textField = document.getElementById(textFields[i]);
		if(!formFieldHasInput(textField.value)){
			document.getElementById(textFields[i] +"_error").style.display="block";

			if(!errorFlag){
				textField.focus();
				textField.select();
			}

			errorFlag = true;
		}
	}

	let regexPostal = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ][ -]?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
	let postal = document.getElementById("postal").value;

	if(!regexPostal.test(postal)){
		document.getElementById("postalformat_error").style.display="block";

		if(!errorFlag){
			document.getElementById("postal").focus();
			document.getElementById("postal").select();
		}

		errorFlag = true;
	}

	let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
	let email = document.getElementById("email").value;

	if(!regexEmail.test(email)){
		document.getElementById("emailformat_error").style.display="block";

		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

function hideErrors() {
	let error = document.getElementsByClassName("error");

	for (let i = 0; i < error.length; i++) {
		error[i].style.display = "none";
	}
}

function load() {
	hideErrors();

	let defaultInput = ["fullname","address","city","postal","email","phone"]

	for(i=0;i<defaultInput.length;i++){
		document.getElementById(defaultInput[i]).value = "";
	}

    document.getElementById('clear').addEventListener("click", resetForm);
	document.getElementById('submit').addEventListener("click", validate);
	
}

document.addEventListener("DOMContentLoaded", load);