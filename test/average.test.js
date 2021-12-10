const { expect } = require('chai');
const { average } = require('../average');

it('computes average of a list of numbers', () => {
	// floating point numbers cannot be compared for equality,
	// hence allowing a delta tolerance
	expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('ignores NaN in the input', () => {
	expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

// when we get a Anomalie we return NaN
it('Give NaN when our data has some outliers', () => {
	expect(average([1, 2, 3, 4, 5, 6, 7, 10000, 2])).to.be.NaN;
});

it('reports the average as NaN on an empty list', () => {
	expect(average([])).to.be.NaN;
});
