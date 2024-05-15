// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

const checkIfExist = (arr: number[]): boolean => {
    const map = new Map<number, boolean>();
    for (const element of arr) {
        if (map.has(element * 2) || map.has(element / 2)) {
            return true;
        }
        map.set(element, true);
    }
    return false;
};
