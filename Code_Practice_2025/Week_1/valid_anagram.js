/**
 * Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.
 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    return s.split("").sort((a,b) => a.localeCompare(b)).join("") === t.split("").sort((a,b) => a.localeCompare(b)).join("");
 };