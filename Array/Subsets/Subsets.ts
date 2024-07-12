// Leetcode: https://leetcode.com/problems/subsets/

// Solution 1
var subsets = (nums: number[]): number[][] => {
    const subsets: number[][] = [[]];

    for (const num of nums) {
        let n = subsets.length;
        for (let i = 0; i < n; i++) {
            let currentCombo = [...subsets[i]];
            currentCombo.push(num);
            subsets.push(currentCombo);
        }
    }

    return subsets;
};

// Solution 2
var subsets = (nums: number[]): number[][] => {
    const subsets: number[][] = [[]];

    for (const num of nums) {
        let n = subsets.length;
        for (let i = 0; i < n; i++) {
            let currentCombo = subsets[i].concat(num); // The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
            subsets.push(currentCombo);
        }
    }

    return subsets;
};
