// Leetcode: https://leetcode.com/problems/3sum-with-multiplicity/

const threeSumMulti = (nums: Array<number>, target: number): number => {
    nums.sort((a, b) => a - b);
    let count: number = 0;
    const MOD = 1000000007;

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
                    const sum = nums[i] + nums[start] + nums[end];
                    if (sum === target) {
                        count++;
                    } else if (sum < target) {
                        break;
                    }
                    end--;
                }

                // FIX RIGHT POINTER & MOVE LEFT POINTER
                start = leftPointer + 1;
                end = rightPointer;
                while (start < end) {
                    const sum = nums[i] + nums[start] + nums[end];
                    if (sum === target) {
                        count++;
                    } else if (sum > target) {
                        break;
                    }
                    start++;
                }

                leftPointer++;
                rightPointer--;
            }
        }
    }

    return count % MOD;
};
