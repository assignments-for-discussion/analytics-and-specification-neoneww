function average(numbers) {
	if (numbers.length == 0) {
		return NaN;
	}

	// filterning all the Numbers
	numbers = numbers.filter((item) => typeof item == 'number' && !isNaN(item));

	// compuuting the Average
	return numbers.reduce((p, c) => p + c, 0) / numbers.length;
}

module.exports = { average };
