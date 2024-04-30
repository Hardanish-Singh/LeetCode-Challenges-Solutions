// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = (arr: Array<number>): boolean => {
    let map: {
        [key: number]: boolean;
    } = {};

    for (const element of arr) {
        if (element * 2 in map || element / 2 in map) {
            return true;
        }
        map[element] = true;
    }

    return false;
};
