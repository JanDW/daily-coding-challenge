// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

const array1 = [1, 2, 3, 4, 5];
let array2 = [];
const totalProduct = array1.reduce((el,next) => el * next);

// Check to avoid division by 0
// one multiplier === 0 => product === 0

totalProduct === 0
	? array2 = Array.from(Array(array1.length), () => 0)
	: array2 = array1.map(el => totalProduct / el);

console.log(array2);

// Other solutions:
// https://galaiko.rocks/posts/2018-07-03/
// https://stackoverflow.com/questions/2680548/given-an-array-of-numbers-return-array-of-products-of-all-other-numbers-no-div
//
// @TODO This still isn't quite right, for the 0 position in array1, the product isn't 0 (unless there is a second 0 in the array).
