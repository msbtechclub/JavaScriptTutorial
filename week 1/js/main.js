function sum() {
	/*
	two variables declared num1 and num2
	their values are set to the value of the inputs in the index.html file with id n1 and n2
	and then the values are converted from string to integer using embeded
	function parseInt().
	*/

	var num1 = parseInt(document.getElementById('n1').value);
	var num2 = parseInt(document.getElementById('n2').value);
	// setting the inner value of the tag which contains the id equals to result.
	document.getElementById('result').innerHTML = num1 + num2;
}

function calculate() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var operator = document.getElementById('operator').value;
	if(num1 === "" || num2 === "") {
		alert("fill empty fields");
	} else {
		num1 = parseInt(document.getElementById('n1').value);
		num2 = parseInt(document.getElementById('n2').value);
		if(operator === '+') {
			document.getElementById('result').innerHTML = num1 + num2;
		} else if(operator === '-') {
			document.getElementById('result').innerHTML = num1 - num2;
		} else if(operator === '*') {
			document.getElementById('result').innerHTML = num1 * num2;
		} else if(operator === '/') {
			document.getElementById('result').innerHTML = num1 / num2;
		}
	}
	
}