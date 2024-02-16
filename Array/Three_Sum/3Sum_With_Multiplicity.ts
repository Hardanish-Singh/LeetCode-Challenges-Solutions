// Leetcode: https://leetcode.com/problems/3sum-with-multiplicity/

var threeSumMulti = (nums: Array<number>, target: number): number => {
    nums.sort((a, b) => a - b);
    let count: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        let leftPointer: number = i + 1;
        let rightPointer: number = nums.length - 1;

        while (leftPointer < rightPointer) {
            if (nums[leftPointer] + nums[rightPointer] + nums[i] < target) {
                leftPointer++;
            } else if (nums[leftPointer] + nums[rightPointer] + nums[i] > target) {
                rightPointer--;
            } else if (nums[leftPointer] + nums[rightPointer] + nums[i] === target) {
                if (nums[leftPointer] === nums[rightPointer]) {
                    let n: number = rightPointer - leftPointer;
                    count += Math.floor((n * (n + 1)) / 2);
                    break;
                }

                count++;

                // FIX LEFT POINTER & MOVE RIGHT POINTER
                let start: number = leftPointer;
                let end: number = rightPointer - 1;
                while (start < end) {
                    if (nums[i] + nums[start] + nums[end] === target) {
                        count++;
                    } else if (nums[i] + nums[start] + nums[end] < target) {
                        break;
                    }
                    end--;
                }

                // FIX RIGHT POINTER & MOVE LEFT POINTER
                start = leftPointer + 1;
                end = rightPointer;
                while (start < end) {
                    if (nums[i] + nums[start] + nums[end] === target) {
                        count++;
                    } else if (nums[i] + nums[start] + nums[end] > target) {
                        break;
                    }
                    start++;
                }

                leftPointer++;
                rightPointer--;
            }
        }
    }
    let mod = 1000000007;
    return count % mod;
};
