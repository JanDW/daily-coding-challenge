// Daily Coding Problem — March 19, 2019

// Good morning! Here's your coding interview problem for today.
// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const array = [10,15,3,7];
const k = 17;

array.some(el => (el < k) && array.indexOf(k - el) !== -1);
