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
        if (map.get(complement)) {
            operations++;
            map.set(complement, (map.get(complement) as number) - 1);
        } else {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
    }
    return operations;
};
