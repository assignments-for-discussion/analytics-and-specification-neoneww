function calcMean(numbers) {
	const n = numbers.length;
	const mean = numbers.reduce((a, b) => a + b, 0) / n;
	return mean;
}
const outlierDetector = (collection) => {
	const size = collection.length;
	let q1, q3;
	const sc = collection.slice().sort((a, b) => a - b);
	if (((size - 1) / 4) % 1 === 0 || (size / 4) % 1 === 0) {
		q1=(1/2)*(sc[Math.floor(size/4) - 1]+sc[Math.floor(size / 4)]);
		q3=(1/2)*(sc[Math.ceil((size*3) / 4) - 1]+sc[Math.ceil((size * 3) / 4)]);
	}
	else
	{
		q1 = sc[Math.floor(size / 4)];
		q3 = sc[Math.floor((size * 3) / 4)];
	}
	const iqr = q3 - q1;
	const maxValue = q3 + iqr * 1.5;
	return sc.filter((value) => value >= maxValue);
};

function Check(numbers) {
	const mean = calcMean(numbers);
	const temp = outlierDetector(numbers);
	if (temp.length >= 1) return NaN;
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
module.exports = {
	average,
};
