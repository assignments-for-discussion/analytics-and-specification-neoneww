function calcMean(numbers) {
	const n = numbers.length;
	const mean = numbers.reduce((a, b) => a + b, 0) / n;
	return mean;
}

function calcStd(numbers) {
	const n = numbers.length;
	const mean = calcMean(numbers);
	const std = Math.sqrt(
		numbers.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
	);
	return std;
}

function Check(numbers) {
	const mean = calcMean(numbers);
	const std = calcStd(numbers);
	for (let x of numbers) {
		if (x > 3 * std || x < 3 * std) return NaN;
	}
	return mean;
}
function average(numbers) {
	if (numbers.length == 0) {
		return NaN;
	} else {
		numbers = numbers.filter(
			(item) => typeof item == 'number' && !isNaN(item)
		);
		return Check(numbers);
	}
}
module.exports = { average };
