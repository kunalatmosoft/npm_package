// index.js

/**
 * Generates a random number between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random number between min and max.
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Removes duplicates from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with duplicates removed.
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

/**
 * Deep clones an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} A deep clone of the input object.
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Merges two objects.
 * @param {Object} target - The target object.
 * @param {Object} source - The source object.
 * @returns {Object} The merged object.
 */
function mergeObjects(target, source) {
    return { ...target, ...source };
}

/**
 * Shuffles an array.
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

/**
 * Converts an object to a query string.
 * @param {Object} obj - The input object.
 * @returns {string} The query string.
 */
function toQueryString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

module.exports = {
    randomNumber,
    capitalizeFirstLetter,
    reverseString,
    removeDuplicates,
    deepClone,
    mergeObjects,
    shuffleArray,
    isPalindrome,
    toQueryString
};
