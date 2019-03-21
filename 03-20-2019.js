// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

const array1 = [1, 2, 3, 4, 0];
const array1ExcludingZeroes = array1.filter(el => el > 0);
const array1ZeroesCount = array1.length - array1ExcludingZeroes.length;
let array2 = [];


if (array1ZeroesCount === 0) {
	const totalProduct = array1.reduce((el,next) => el * next);
	array2 = array1.map(el => totalProduct / el)
} else if (array1ZeroesCount === 1) {
	// Set all elements to zero, except return the product for where value was 0
	const totalProduct = array1ExcludingZeroes.reduce((el,next) => el * next);
	array2 = Array.from(Array(array1.length), () => 0);
	array2[array1.indexOf(0)] = totalProduct;
} else {
	// Multiple zeroes, all products will be 0
	array2 = Array.from(Array(array1.length), () => 0);
}

console.log(array2);

// Other solutions (not using division):
// https://galaiko.rocks/posts/2018-07-03/
// https://stackoverflow.com/questions/2680548/given-an-array-of-numbers-return-array-of-products-of-all-other-numbers-no-div
//
// @TODO This still isn't quite right, for the 0 position in array1, the product isn't 0 (unless there is a second 0 in the array).
