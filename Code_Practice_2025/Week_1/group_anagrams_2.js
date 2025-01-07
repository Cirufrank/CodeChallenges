/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.
 */

const A_CHAR_CODE_VALUE = 97;
const groupAnagrams = function(strs) {
    const anagramGroupMap = new Map();

    for (const str of strs) {
        let key = new Array(26).fill(0);
        for (const char of str) {
            key[char.charCodeAt() - A_CHAR_CODE_VALUE] += 1;
        }
        key = key.join();

        const anagramGroup = anagramGroupMap.get(key);

        if (anagramGroup === undefined) {
            anagramGroupMap.set(key, [str]);
            continue
        }

        anagramGroupMap.set(key, [str, ...anagramGroup])

    }

    return Array.from(anagramGroupMap.values())
}

// Time complexity: O(n^2)
// Space complexity: O(n)

// 16ms
// Beats 98.06%
// Analyze Complexity
// Memory
// 62.07MB
// Beats 88.44%
