// Leetcode: https://leetcode.com/problems/group-by

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((accumulator, currentItem) => {
        const key = fn(currentItem);
        if (!(key in accumulator)) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentItem);
        // (accumulator[key] ||= []).push(currentItem);
        return accumulator;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
