// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

// Solution 1
var checkIfExist = (arr: number[]): boolean => {
    const map = new Map<number, boolean>();
    for (const element of arr) {
        if (map.has(element * 2) || map.has(element / 2)) {
            return true;
        }
        map.set(element, true);
    }
    return false;
};

// Solution 2

var checkIfExist = (arr: number[]): boolean =>
    arr.reduce((accumulator: Map<number, boolean> & { found?: boolean }, currentElement) => {
        if (accumulator.has(currentElement * 2) || accumulator.has(currentElement / 2)) {
            accumulator.found = true;
        }
        accumulator.set(currentElement, true);
        return accumulator;
    }, new Map<number, boolean>() as Map<number, boolean> & { found?: boolean }).found === true;
