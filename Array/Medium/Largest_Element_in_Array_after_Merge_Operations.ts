// Leetcode: https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/

/*
    Consider the case of [3, 5, 7, 9], you can initially combine 3 and 5 to get 8 which gives [8, 7, 9].
    This makes it harder to continue as you cannot directly combine 8 and 7, and have to search for the next pair in the array. 
    You iterate the array, find the next pair at 7 and 9, and realize you can combine them to 16 which gives [8, 16].
    You continue on and combine 8, 16 to give [24].

    This gives us a bit of intuition to start from the back.
    If we iterate backwards, we can always guarantee that we won't touch later elements anymore, as our nums[i - 1] will always be bigger than nums[i] 
    (If we combine, it will definiteily be bigger. If we don't, it means we can't ever use nums[i] to combine anything anymore). 
    Easier to manage as we don't have to create a new list/ worry about needing to pop elements.

*/
const maxArrayValue = (nums: number[]): number => {
    for (let i: number = nums.length - 2; i >= 0; i--) {
        if (nums[i + 1] >= nums[i]) {
            nums[i] += nums[i + 1];
        }
    }
    return nums[0];
};
