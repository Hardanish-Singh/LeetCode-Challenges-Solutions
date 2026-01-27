// Leetcode: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

/**
 * @param {number[]} salary
 * @return {number}
 */

const average = (salary) => {
    const min = Math.min.apply(this, salary);
    const max = Math.max.apply(this, salary);
    const sum = salary.reduce((acc, val) => acc + val, 0);
    return (sum - max - min) / (salary.length - 2);
};
