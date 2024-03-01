// Leetcode: https://leetcode.com/problems/4sum/

const fourSum = (nums: number[], target: number): number[][] => {
    nums.sort((a, b) => a - b);
    let set = new Set<string>();

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            let leftPointer: number = j + 1;
            let rightPointer: number = nums.length - 1;

            while (leftPointer < rightPointer) {
                const sum: number = nums[i] + nums[j] + nums[leftPointer] + nums[rightPointer];
                if (sum < target) {
                    leftPointer++;
                } else if (sum > target) {
                    rightPointer--;
                } else if (sum === target) {
                    set.add(`${nums[i]}, ${nums[j]}, ${nums[leftPointer]}, ${nums[rightPointer]}`);
                    leftPointer++;
                    rightPointer--;
                }
            }
        }
    }

    return Array.from(set).map((key) => key.split(",").map(Number));
};
