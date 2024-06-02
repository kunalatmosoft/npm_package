const {
    randomNumber,
    capitalizeFirstLetter,
    reverseString,
    removeDuplicates,
    deepClone,
    mergeObjects,
    shuffleArray,
    isPalindrome,
    toQueryString
} = require('mathking_lib');

console.log(randomNumber(1, 10)); // Outputs a random number between 1 and 10
console.log(capitalizeFirstLetter('hello')); // Outputs 'Hello'
console.log(reverseString('hello')); // Outputs 'olleh'
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs [1, 2, 3, 4, 5]
console.log(deepClone({ a: 1, b: { c: 2 } })); // Outputs { a: 1, b: { c: 2 } }
console.log(mergeObjects({ a: 1 }, { b: 2 })); // Outputs { a: 1, b: 2 }
console.log(shuffleArray([1, 2, 3, 4, 5])); // Outputs shuffled array
console.log(isPalindrome('A man a plan a canal Panama')); // Outputs true
console.log(toQueryString({ name: 'John', age: 30 })); // Outputs 'name=John&age=30'
