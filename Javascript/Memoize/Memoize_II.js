// Leetcode: https://leetcode.com/problems/memoize-ii/

/* 
    This version is a harder one because it relaxes the constraints:
        1) Any type of input is allowed (object, array, number, etc).
        2) Inputs are identical if they are === to each other (strict equality).
        3) So you can't just JSON.stringify to create a key like before. Instead, you need to cache based on references properly.
*/

// Solution 1: Memoize a function with a Map object
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        let curr = cache;
        for (const arg of args) {
            if (!curr.has(arg)) {
                curr.set(arg, new Map());
            }
            curr = curr.get(arg);
        }
        if (curr.has("result")) {
            return curr.get("result");
        }
        const result = fn(...args);
        curr.set("result", result);
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

/* 
    Solution 2:
        Since objects does not prevent garbage collection, we can use:
            1) WeakMap for object keys (because WeakMap doesn't prevent GC)
            2) Map for primitive keys (number, string, etc.)
*/
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        let curr = cache;
        for (const arg of args) {
            const isObject = arg !== null && (typeof arg === "object" || typeof arg === "function");
            if (!curr.has(arg)) {
                curr.set(arg, isObject ? new WeakMap() : new Map());
            }
            curr = curr.get(arg);
        }
        if (curr.has("result")) {
            return curr.get("result");
        }
        const result = fn(...args);
        curr.set("result", result);
        return result;
    };
}
/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
