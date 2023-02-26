var password = document.getElementById("password");
var copyStatus = document.getElementById("copied-status");
var msg = "";

//
var addNumber = document.getElementById("number-check");
var addSymbol = document.getElementById("symbol-check");
//

let passwordLength = (document.getElementById("password-length").value = 8);
document.getElementById("length-value").innerText = passwordLength;
//
let selectPasswordType = "Random Password";

document
	.getElementById("password-type-option")
	.addEventListener("change", function () {
		selectPasswordType = this.value;
	});

//
function generatePassword() {
	//
	var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var number = "0123456789";

	var numChar =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numCharSymbol =
		"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numSymbol = "0123456789!@#$%^&*()";
	var charSymbol =
		"abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//
	passwordLength = document.getElementById("password-length").value;
	document.getElementById("length-value").innerText = passwordLength;
	var password = "";
	if (
		selectPasswordType == "Random Password" &&
		addNumber.checked == true &&
		addSymbol.checked == true
	) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * numCharSymbol.length);
			password += numCharSymbol.substring(randomPassword, randomPassword + 1);
		}
	}
	if (selectPasswordType == "Random Password" && addNumber.checked == true) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * numChar.length);
			password += numChar.substring(randomPassword, randomPassword + 1);
		}
	}
	if (selectPasswordType == "Random Password" && addSymbol.checked == true) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * charSymbol.length);
			password += charSymbol.substring(randomPassword, randomPassword + 1);
		}
	}
	if (selectPasswordType == "Random Password") {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * chars.length);
			password += chars.substring(randomPassword, randomPassword + 1);
		}
	}

	if (selectPasswordType == "PIN" && addSymbol.checked == true) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * numChar.length);
			password += numSymbol.substring(randomPassword, randomPassword + 1);
		}
	}

	if (selectPasswordType == "PIN") {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * number.length);
			password += number.substring(randomPassword, randomPassword + 1);
		}
	}

	document.getElementById("password").innerText = password;
	if (password != null) {
		msg = "password not copied";
		copyStatus.innerText = msg;
		copyStatus.style.padding = "10px";
	}
}
//
function copyPassword() {
	var copyText = document.getElementById("password").innerText;
	if (navigator.clipboard.writeText(copyText)) {
		msg = "password copied";
		copyStatus.innerText = msg;
		copyStatus.style.padding = "10px";
	}
	console.log(selectPasswordType);

	document.execCommand("copy");
}

//
var elem = document.querySelector('input[type="range"]');

var rangeValue = function () {
	var newValue = elem.value;
	var target = document.getElementById("length-value");
	target.innerText = newValue;
};

elem.addEventListener("input", rangeValue);
