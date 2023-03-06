// Leetcode: https://leetcode.com/problems/basic-calculator/

function parse(str) {
        return Function(`'use strict'; return (${str})`)();
}

/**
 * @param {string } s
 * @return {number }
 */

var calculate = function (s) {
        return parse(s);
};
