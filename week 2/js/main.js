var numbers = "";

function add(calBtn) {
	numbers += calBtn;
	document.getElementById("cal-display").innerHTML = numbers;
}

function calculate() {
	var cal = eval(numbers);
	document.getElementById("cal-display").innerHTML = cal;
}
