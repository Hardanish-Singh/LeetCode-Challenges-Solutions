// Leetcode: https://leetcode.com/problems/3sum/

type ThreeSum = {
    [key: string]: any;
};

const threeSum = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b);
    let target: number = 0;
    let hash_table: ThreeSum = {};
    let triplets: number[][] = [];

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
                const key = nums[i] + "," + nums[leftPointer] + "," + nums[rightPointer];
                if (!(key in hash_table)) {
                    triplets.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                }
                hash_table[key] = true;
                leftPointer++;
                rightPointer--;
            }
        }
    }

    return triplets;
};
