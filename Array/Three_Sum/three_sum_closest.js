// Leetcode: https://leetcode.com/problems/3sum-closest/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */

const findClosest = (arr, num) => {
        if (arr.length == 0) {
                return 0;
        }

        let closest = arr[0];
        for (let item of arr) {
                if (Math.abs(item - num) < Math.abs(closest - num)) {
                        closest = item;
                }
        }
        return closest;
};

function threeSumClosest(nums, target) {
        nums.sort((a, b) => a - b);
        let arr = [];

        for (let i = 0; i < nums.length - 1; i++) {
                let leftPointer = i + 1;
                let rightPointer = nums.length - 1;

                while (leftPointer < rightPointer) {
                        let sum = nums[i] + nums[leftPointer] + nums[rightPointer];
                        arr.push(sum);
                        if (nums[leftPointer] + nums[rightPointer] + nums[i] < target) {
                                leftPointer++;
                        } else if (nums[leftPointer] + nums[rightPointer] + nums[i] > target) {
                                rightPointer--;
                        } else if (nums[leftPointer] + nums[rightPointer] + nums[i] === target) {
                                return sum;
                        }
                }
        }

        return findClosest(arr, target);
}
