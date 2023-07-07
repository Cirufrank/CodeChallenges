/*

Instructions:

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

*/

/**
 * @param {number} n
 * @return {number}
 */

const climbStairsWithCache = function(n, cache) {
    if (n < 3) return n;
    const calculatedVal = cache.get(n);
    if (calculatedVal) return calculatedVal
    cache.set(n,climbStairsWithCache(n - 1, cache) + climbStairsWithCache(n - 2, cache));
    return cache.get(n);
}

const climbStairs = function(n) {
    cache = new Map();
    return climbStairsWithCache(n, cache);
};

/*

Results:

Runtime
50 ms
Beats
90.18%
Memory
42 MB
Beats
24.24%

*/