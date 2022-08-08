/*
        You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. 
        A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
                1) i < j < k,
                2) nums[j] - nums[i] == diff, and
                3) nums[k] - nums[j] == diff.
        Return the number of unique arithmetic triplets.
*/

function arithmeticTriplets( nums: number[], diff: number ): number {
        let numberOfArithmeticTriplets: number = 0;
        
        for( let i: number = 0; i < nums.length; i++ ) {
                if( nums.includes( nums[ i ] + diff ) && nums.includes( nums[ i ] + diff + diff ) ) {
                        numberOfArithmeticTriplets++;
                }
        }
        
        return numberOfArithmeticTriplets;
};