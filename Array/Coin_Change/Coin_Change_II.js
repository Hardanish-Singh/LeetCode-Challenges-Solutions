/**
 * @param { number } amount
 * @param { number[] } coins
 * @return { number }
 */

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
