// Leetcode: https://leetcode.com/problems/max-number-of-k-sum-pairs/

/*
        SOLUTION 1: USING MAP
                Time Complexity: O( n )
                Space Complexity: O( n )
*/

var maxOperations = (nums: number[], target: number): number => {
    const map = new Map<number, number>();
    let operations = 0;
    for (const num of nums) {
        const complement = target - num;
        if ((map.get(complement) as number) > 1) {
            operations++;
            map.set(complement, (map.get(complement) as number) - 1);
        } else {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
    }
    return operations;
};

/*
        SOLUTION 1: TWO POINTER APPROACH USING SORT
                Time Complexity: O( nlogn )
                Space Complexity: O( n ) or O( logn ) The space complexity of the sorting algorithm depends on the implementation of each program language
*/

var maxOperations = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b);
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let operations = 0;

    while (leftPointer < rightPointer) {
        const sum = nums[leftPointer] + nums[rightPointer];
        if (sum < target) {
            leftPointer++;
        } else if (sum > target) {
            rightPointer--;
        } else {
            leftPointer++;
            rightPointer--;
            operations++;
        }
    }

    return operations;
};
