// Leetcode: https://leetcode.com/problems/range-sum-query-immutable/
// @ts-nocheck

// Solution 1 (using Typescript classes)
class NumArray {
    #nums: number[];

    constructor(nums: number[]) {
        this.#nums = nums;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        // Iterate over the range [left, right] and sum the elements
        for (let i = left; i <= right; i++) {
            sum += this.#nums[i];
        }
        return sum;
    }
}

// Solution 2 (using Typescript classes)
class NumArray {
    constructor(private nums: number[]) {}

    sumRange(left: number, right: number): number {
        let sum = 0;
        // Iterate over the range [left, right] and sum the elements
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
}

// Solution 3 (using Typescript classes)
class NumArray {
    private nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        // Iterate over the range [left, right] and sum the elements
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
}

// Solution 4 (using Javascript prototypes)
