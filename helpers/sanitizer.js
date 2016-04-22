exports.getCorrectEcuadorNumberFormat = function(number) {
	number = number.trim();
	if (!number.startsWith("+593")) {
		number = number.startsWith("0") ? number.replace('0', '') : number;
	}

	return number.startsWith("593") ? "+" + number : "+593" + number;
};