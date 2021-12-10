function calcMean(numbers) {
	const n = numbers.length;
	const mean = numbers.reduce((a, b) => a + b, 0) / n;
	return mean;
}

function filterOutliers(someArray) {
	if (someArray.length < 4) return someArray;

	let values, q1, q3, iqr, maxValue, minValue;

	values = someArray.slice().sort((a, b) => a - b);

	if ((values.length / 4) % 1 === 0) {
		q1 =
			(1 / 2) *
			(values[values.length / 4] + values[values.length / 4 + 1]);
		q3 =
			(1 / 2) *
			(values[values.length * (3 / 4)] +
				values[values.length * (3 / 4) + 1]);
	} else {
		q1 = values[Math.floor(values.length / 4 + 1)];
		q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
	}

	iqr = q3 - q1;
	maxValue = q3 + iqr * 1.5;
	minValue = q1 - iqr * 1.5;

	return values.filter((x) => x >= minValue && x <= maxValue);
}

function Check(numbers) {
	const mean = calcMean(numbers);
	temp = filterOutliers(numbers, mean);
	if (temp.length != numbers.length) return NaN;
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
