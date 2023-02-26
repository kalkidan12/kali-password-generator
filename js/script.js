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

var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";

var numChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharSymbol =
	"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSymbol = "0123456789!@#$%^&*()";
var charSymbol =
	"abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Set default password on load
function defaultPass() {
	var password = "";
	var finalPassword = "";
	for (var i = 0; i <= passwordLength; i++) {
		var randomPassword = Math.floor(Math.random() * numCharSymbol.length);
		finalPassword += numCharSymbol.substring(
			randomPassword,
			randomPassword + 1,
		);
	}
	password = finalPassword.slice(0, passwordLength);
	document.getElementById("password").innerText = password;
}

document.addEventListener("DOMContentLoaded", defaultPass);
//
function generatePassword() {
	//
	// var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// var number = "0123456789";

	// var numChar =
	// 	"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// var numCharSymbol =
	// 	"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// var numSymbol = "0123456789!@#$%^&*()";
	// var charSymbol =
	// 	"abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// //
	passwordLength = document.getElementById("password-length").value;
	document.getElementById("length-value").innerText = passwordLength;
	var password = "";
	var finalPassword = "";

	if (
		selectPasswordType == "Random Password" &&
		addNumber.checked == true &&
		addSymbol.checked == true
	) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * numCharSymbol.length);
			finalPassword += numCharSymbol.substring(
				randomPassword,
				randomPassword + 1,
			);
		}
		password = finalPassword.slice(0, passwordLength);
	}
	if (selectPasswordType == "Random Password" && addNumber.checked == true) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * numChar.length);
			finalPassword += numChar.substring(randomPassword, randomPassword + 1);
		}
		password = finalPassword.slice(0, passwordLength);
	}
	if (selectPasswordType == "Random Password" && addSymbol.checked == true) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * charSymbol.length);
			finalPassword += charSymbol.substring(randomPassword, randomPassword + 1);
		}
		password = finalPassword.slice(0, passwordLength);
	}
	if (selectPasswordType == "Random Password") {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * chars.length);
			finalPassword += chars.substring(randomPassword, randomPassword + 1);
		}
		password = finalPassword.slice(0, passwordLength);
	}

	if (selectPasswordType == "PIN" && addSymbol.checked == true) {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * numChar.length);
			finalPassword += numSymbol.substring(randomPassword, randomPassword + 1);
		}
		password = finalPassword.slice(0, passwordLength);
	}

	if (selectPasswordType == "PIN") {
		for (var i = 0; i <= passwordLength; i++) {
			var randomPassword = Math.floor(Math.random() * number.length);
			finalPassword += number.substring(randomPassword, randomPassword + 1);
		}
		password = finalPassword.slice(0, passwordLength);
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
