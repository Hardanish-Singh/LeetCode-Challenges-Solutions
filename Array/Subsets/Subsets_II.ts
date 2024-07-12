// Leetcode: https://leetcode.com/problems/subsets-ii/

// Solution 1
var subsetsWithDup = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b);
    let subsets: number[][] = [[]];

    for (const num of nums) {
        let n = subsets.length;
        for (let i = 0; i < n; i++) {
            let currentCombo = [...subsets[i]];
            currentCombo.push(num);
            subsets.push(currentCombo);
        }
    }
    // @ts-ignore
    return [...new Set(subsets.map(JSON.stringify))].map(JSON.parse);
};

// Solution 2
var subsetsWithDup = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b);
    let subsets: number[][] = [[]];

    for (const num of nums) {
        let n = subsets.length;
        for (let i = 0; i < n; i++) {
            let currentCombo = subsets[i].concat(num); // The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
            subsets.push(currentCombo);
        }
    }
    // @ts-ignore
    return [...new Set(subsets.map(JSON.stringify))].map(JSON.parse);
};
