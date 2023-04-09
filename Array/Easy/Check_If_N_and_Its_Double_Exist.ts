// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = (arr: Array<number>): boolean => {
        let map: {
                [key: number]: boolean;
        } = {};

        for (let i = 0; i < arr.length; i++) {
                if (arr[i] * 2 in map || arr[i] / 2 in map) {
                        return true;
                }
                map[arr[i]] = true;
        }

        return false;
};
