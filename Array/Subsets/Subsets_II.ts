// Leetcode: https://leetcode.com/problems/subsets-ii/

function subsetsWithDup(nums: number[]): number[][] {
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
}
