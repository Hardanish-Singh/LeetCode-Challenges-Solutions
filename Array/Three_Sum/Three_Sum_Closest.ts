// Leetcode: https://leetcode.com/problems/3sum-closest/

function threeSumClosest(nums: Array<number>, target: number): number {
    nums.sort((a, b) => a - b);
    let closestSumClosest: number = 0;
    let min: number = Number.MAX_VALUE;

    for (let i: number = 0; i < nums.length - 1; i++) {
        let leftPointer: number = i + 1;
        let rightPointer: number = nums.length - 1;

        while (leftPointer < rightPointer) {
            const sum: number = nums[i] + nums[leftPointer] + nums[rightPointer];
            const absoluteDifference = Math.abs(target - sum);
            if (absoluteDifference < min) {
                closestSumClosest = sum;
                min = absoluteDifference;
            }
            //     closestSumArray.push(sum);
            if (nums[leftPointer] + nums[rightPointer] + nums[i] < target) {
                leftPointer++;
            } else if (nums[leftPointer] + nums[rightPointer] + nums[i] > target) {
                rightPointer--;
            } else if (nums[leftPointer] + nums[rightPointer] + nums[i] === target) {
                return sum;
            }
        }
    }

    return closestSumClosest;
}
