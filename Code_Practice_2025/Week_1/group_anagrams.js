/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.
 */
const groupAnagrams = function(strs) {
    const anagramMap = new Map();
    for (const str of strs) {
        sortedStr = str.split("").sort().join("");
        const anagramGroup = anagramMap.get(sortedStr);

        if (anagramGroup === undefined) {
            anagramMap.set(sortedStr, [str]);
            continue;
        }

        anagramMap.set(sortedStr, [str, ...anagramGroup]);
    }

    return Array.from(anagramMap.values())
}

// Time complexity: O(n logn)
// Space complexity: O(n)