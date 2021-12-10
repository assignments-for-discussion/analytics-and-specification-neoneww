function average(numbers) {
	if (numbers.length == 0) {
		return NaN;
	}

	// filterning all the Numbers
	numbers = numbers.filter((item) => typeof item == 'number' && !isNaN(item));

	/*
	if we have Anomalies in our dataset 
	this means something is wrong with the sensor or battery
	when we get a value more or less than 3 * standard deviation then we get a Anomalie
	*/
	const n = numbers.length;
	const mean = numbers.reduce((a, b) => a + b, 0) / n;
	const std = Math.sqrt(
		numbers.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
	);

	var flag = 0;
	for (let x of numbers) {
		if (x > 3 * std || x < 3 * std) {
			flag = 1;
		}
	}

	if (flag == 1) {
		return NaN;
	}

	return mean;
}

module.exports = { average };
