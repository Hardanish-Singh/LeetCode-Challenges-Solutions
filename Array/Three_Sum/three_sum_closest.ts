// Leetcode: https://leetcode.com/problems/3sum-closest/

/**
 * @param { number[] } closestSumArray
 * @param { number } target
 * @return { number }
 */

function findClosestElementToTarget(closestSumArray: Array<number>, target: number): number {
        if (closestSumArray.length == 0) {
                return 0;
        }
        let closest: number = closestSumArray[0];
        for (let item of closestSumArray) {
                if (Math.abs(item - target) < Math.abs(closest - target)) {
                        closest = item;
                }
        }
        return closest;
}

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */

function threeSumClosest(nums: Array<number>, target: number): number {
        nums.sort((a, b) => a - b);
        let closestSumArray: Array<number> = [];

        for (let i: number = 0; i < nums.length - 1; i++) {
                let leftPointer: number = i + 1;
                let rightPointer: number = nums.length - 1;

                while (leftPointer < rightPointer) {
                        let sum: number = nums[i] + nums[leftPointer] + nums[rightPointer];
                        closestSumArray.push(sum);
                        if (nums[leftPointer] + nums[rightPointer] + nums[i] < target) {
                                leftPointer++;
                        } else if (nums[leftPointer] + nums[rightPointer] + nums[i] > target) {
                                rightPointer--;
                        } else if (nums[leftPointer] + nums[rightPointer] + nums[i] === target) {
                                return sum;
                        }
                }
        }

        return findClosestElementToTarget(closestSumArray, target);
}
