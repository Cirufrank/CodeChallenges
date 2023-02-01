/*

Description:

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
Example 2:

Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3
 

Constraints:

1 <= dominoes.length <= 4 * 104
dominoes[i].length == 2
1 <= dominoes[i][j] <= 9

*/

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function(dominoes) {
    let totalPairs = 0
    while (dominoes.length > 1) {
        const curDomino = dominoes.shift()
        for (const otherDomino of dominoes) {
            const [a, b] = curDomino
            const [c, d] = otherDomino
            if ((a === c && b === d) || (a === d && b === c)) ++totalPairs
        }
    }
    return totalPairs
};

/*

Result:

Runtime
9532 ms
Beats
5.33%
Memory
45.8 MB
Beats
92%

*/