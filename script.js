
/**
 * 1. Reverse a String: 
 * Write a function that takes a string as input and returns the string reversed.
 * ----------------------------------------------------------------------------------
 */

// Solution 1
const reverseString1 = (str) => {
    return [...str].reverse().join('');
}

console.log(reverseString1('hello'), "==reverseString1");

// Solution 2
const reverseString2 = (str) => {
    let temp = '';
    const len = str.length - 1;

    for (let i = len; i >= 0; i--) {
        // temp += str.charAt(i);
        temp += str[i];
    }
    return temp;
}

console.log(reverseString2('strong'), "==reverseString2");

/**
 * 2. Two Sum: Given an array of integers, 
 * find two numbers such that they add up to a specific target number.
 * ----------------------------------------------------------------------------------
 */

// Solution 1 :: O(n2) complexity donot check for multiple values 
const SumOfTwo = (arr, target) => {
    let result = [];
    const sum = arr.map((item, i) => {
        if (item + arr[i + 1] === target) {
            result = [i, i + 1];
        }
    });
    return result;
}
console.log(SumOfTwo([1, 2, 3, 4], 0), "==SumOfTwo1");

// Solution 2 : O(n) but only return single pair
const SumOfTwo2 = (arr, target) => {
    const result = arr.findIndex((item, i) => item + arr[i + 1] === target);
    return (result !== -1) ? [result, result + 1] : [];
}
console.log(SumOfTwo2([1, 2, 3, 4], 3), "==SumOfTwo2");

// Solution 3 :: O(n) complexity
const SumOfTwo3 = (arr, target) => {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result = [i, j];
            }
        }
    }
    return result;
}
console.log(SumOfTwo3([1, 2, 3, 4, 3], 6), "==SumOfTwo3");

// Best solution using hashmap
// Solution 4 :: O(n) complexity
const SumOfTwo4 = (arr, target) => {
    const numMap = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i];

        if (numMap[compliment] !== undefined) {
            result.push([numMap[compliment], i]);
        }
        numMap[arr[i]] = i;
    }
    return result.length > 0 ? result : [];
}
console.log(SumOfTwo4([1, 2, 3, 4, 3], 6), "==SumOfTwo4");

/***
 * 3. Palindrome Check: 
 * Write a function to determine if a given string is a palindrome or not.
 * -------------------------------------------------------------------------------- 
*/

// Solution 1
const palindrome1 = (str) => {
    return [...str].reverse().join('') === str;
}

console.log(palindrome1('malayalam'), "==palindrome1");

// Solution 2
const palindrome2 = (str) => {
    let tempStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        tempStr += str[i];
    }
    return tempStr === str;
}

console.log(palindrome2('amma'), "==palindrome2");


/***
 * 4. Merge Sorted Arrays:
 * Given two sorted arrays, merge them into a single sorted array.
 * -------------------------------------------------------------------------------- 
*/