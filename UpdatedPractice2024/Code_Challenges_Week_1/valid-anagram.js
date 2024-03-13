/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const charsVisited = new Map();

    for (const char of s) {
        if (charsVisited.get(char)) continue;
        charsVisited.set(char, true);

        const totalCharsInS = s.split("").filter((sChar) => sChar === char).length
        const totalCharsInT = t.split("").filter((tChar) => tChar === char).length

        if (totalCharsInS !== totalCharsInT) return false;
    }

    return true;
};