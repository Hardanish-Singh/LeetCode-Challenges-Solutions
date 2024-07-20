// Leetcode: https://leetcode.com/problems/json-deep-equal/

/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */

const replacer = (key, value) =>
    value && typeof value === "object" && !Array.isArray(value)
        ? Object.fromEntries(Object.entries(value).sort((a, b) => a[0].localeCompare(b[0])))
        : value;

const areDeeplyEqual = (o1, o2) => JSON.stringify(o1, replacer) === JSON.stringify(o2, replacer);
