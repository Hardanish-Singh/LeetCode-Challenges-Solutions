// Leetcode: https://leetcode.com/problems/3sum-smaller/

var threeSumSmaller = function (nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let count: number = 0;

    for (let i: number = 0; i < nums.length - 1; i++) {
        let leftPointer: number = i + 1;
        let rightPointer: number = nums.length - 1;

        while (leftPointer < rightPointer) {
            if (nums[leftPointer] + nums[rightPointer] + nums[i] < target) {
                count++;
                /*
                        NOW WE NEED TO FIND HOW MANY PAIRS WITH leftPointer index THAT SATISFY THIS CONDITION?
                        FIX LEFT POINTER & MOVE RIGHT POINTER
                */
                let start: number = leftPointer;
                let end: number = rightPointer - 1;
                while (start < end) {
                    if (nums[i] + nums[start] + nums[end] < target) {
                        count++;
                    } else {
                        break;
                    }
                    end--;
                }
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }

    return count;
};
