// Leetcode: https://leetcode.com/problems/3sum/

const threeSum = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b);
    let target: number = 0;
    let set = new Set<string>();

    for (let i: number = 0; i < nums.length; i++) {
        let leftPointer: number = i + 1;
        let rightPointer: number = nums.length - 1;

        while (leftPointer < rightPointer) {
            const sum = nums[leftPointer] + nums[rightPointer] + nums[i];
            if (sum < target) {
                leftPointer++;
            } else if (sum > target) {
                rightPointer--;
            } else if (sum === target) {
                set.add(`${nums[i]}, ${nums[leftPointer]}, ${nums[rightPointer]}`);
                leftPointer++;
                rightPointer--;
            }
        }
    }

    return Array.from(set).map((key) => key.split(",").map(Number));
};
