// Leetcode: https://leetcode.com/problems/3sum-closest/

const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b);
    let closestSum: number = 0;
    let min: number = Number.MAX_VALUE;

    for (let i: number = 0; i < nums.length - 1; i++) {
        let leftPointer: number = i + 1;
        let rightPointer: number = nums.length - 1;

        while (leftPointer < rightPointer) {
            const sum: number = nums[i] + nums[leftPointer] + nums[rightPointer];
            const absoluteDifference = Math.abs(target - sum);
            if (min > absoluteDifference) {
                closestSum = sum;
                min = absoluteDifference;
            }
            if (sum < target) {
                leftPointer++;
            } else if (sum > target) {
                rightPointer--;
            } else if (sum === target) {
                closestSum = sum;
                break;
            }
        }
    }

    return closestSum;
};
