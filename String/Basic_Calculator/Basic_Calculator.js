// Leetcode: https://leetcode.com/problems/basic-calculator/

function parse(str) {
    return Function(`'use strict'; return (${str})`)();
}

var calculate = function (s) {
    return parse(s);
};
