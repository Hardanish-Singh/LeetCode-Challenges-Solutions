/*
        You are given a 0-indexed binary array nums of length n. 
        nums can be divided at index i (where 0 <= i <= n) into two arrays (possibly empty) nums(left) and nums(right):
                1) nums(left) has all the elements of nums between index 0 and i - 1 (inclusive), while nums(right) has all the elements of nums between index i and n - 1 (inclusive).
                2) If i == 0, nums(left) is empty, while nums(right) has all the elements of nums
                3) If i == n, nums(left) has all the elements of nums, while nums(right) is empty.
        
        The division score of an index i is the sum of the number of 0's in nums(left) and the number of 1's in nums(right).
        Return all distinct indices that have the highest possible division score. You may return the answer in any order.
*/
var maxScoreIndices = function(nums) {
        let hash_table = {

        };
        let left = 0;
        let right = nums.filter( n => n === 1 ).length;
        let score = left + right;
        hash_table[score] = [0];   
        let max = score;
    
        for( let i = 0; i < nums.length; i++ ) {
                nums[i] == 0 ? left++ : right--;
                score = left + right;
                if( hash_table[score] ) {
                        let data =  hash_table[score];
                        data.push(i+1);
                        hash_table[score] = data;
                } 
                else {
                        hash_table[score] = [i+1];       
                }
                if( score > max ) {
                        max = score;
                }
        }

        return hash_table[max];
};