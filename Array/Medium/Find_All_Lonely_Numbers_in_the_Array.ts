// Leetcode: https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/

type map = {
    [key: number]: number;
};

var findLonely = function (nums: Array<number>): Array<number> {
    let lonelyNumbers: Array<number> = [];
    let map: map = {};

    for (let i: number = 0; i < nums.length; i++) {
        map[nums[i]] ? (map[nums[i]] += 1) : (map[nums[i]] = 1);
    }

    /*
        LOOP THROUGH MAP AND CHECK FOLLOWING CONDITIONS
            1) IF NUMBER HAS NO ADJACENT NUMBERS PRESENT IN THE MAP
            2) IF NUMBER APPREARS EXACTLY ONCE IN THE MAP
    */
    for (let [key, value] of Object.entries(map)) {
        const next = Number(key) + 1;
        const previous = Number(key) - 1;
        if (!map.hasOwnProperty(next) && !map.hasOwnProperty(previous) && value === 1) {
            lonelyNumbers.push(Number(key));
        }
    }

    return lonelyNumbers;
};
