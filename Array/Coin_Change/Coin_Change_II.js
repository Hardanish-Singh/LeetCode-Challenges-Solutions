/**
 * @param { number } amount
 * @param { number[] } coins
 * @return { number }
 */

// SOLUTION 1: RECURSION (TLE)
var change = function (amount, coins) {
        let count = 0;
        coins.sort((a, b) => a - b);

        function combinationSum(sum = 0, idx = 0) {
                if (sum < 0 || sum > amount) {
                        return 0;
                }

                if (sum == amount) {
                        return ++count;
                }

                for (let i = idx; i < coins.length; i++) {
                        combinationSum(sum + coins[i], i);
                }
        }

        combinationSum();
        return count;
};

/**
 * @param { number } amount
 * @param { number[] } coins
 * @return { number }
 */

// SOLUTION 2: RECURSION WITH MEMOIZATION

var change = function (amount, coins) {
        let cache = {};
        coins.sort((a, b) => a - b);

        function combinationSum(sum = 0, idx = 0) {
                let count = 0;
                if (sum < 0 || sum > amount) {
                        return count;
                }

                const key = `${sum},${idx}`;
                if (key in cache) {
                        count += cache[key];
                        return count;
                }

                if (sum == amount) {
                        return ++count;
                }

                for (let i = idx; i < coins.length; i++) {
                        count += combinationSum(sum + coins[i], i);
                }
                cache[key] = count;
                return count;
        }

        return combinationSum();
};
