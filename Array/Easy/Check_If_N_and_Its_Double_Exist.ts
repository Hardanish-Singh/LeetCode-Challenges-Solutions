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
var checkIfExist2 = (arr: number[], map = new Map<number, boolean>()): boolean =>
    arr.reduce((accumulator, currentElement) => {
        if (map.has(currentElement * 2) || map.has(currentElement / 2)) {
            arr.length = 0; // eject early by mutating the iterated array
            return true;
        }
        map.set(currentElement, true);
        return accumulator;
    }, false);
