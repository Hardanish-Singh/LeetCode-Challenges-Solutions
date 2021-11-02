/*
        Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
        If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
        The replacement must be in place and use only constant extra memory.

        Example 1:
                Input: nums = [1,2,3]
                Output: [1,3,2]
        Example 2:
                Input: nums = [3,2,1]
                Output: [1,2,3]
        Example 3:
                Input: nums = [1,1,5]
                Output: [1,5,1]
        Example 4:
                Input: nums = [1]
                Output: [1]
        Constraints:
                1 <= nums.length <= 100
                0 <= nums[i] <= 100
*/

/*
 * @param { number[] } nums
 * @return { number[][] }
*/

function swap_index_values( leftIndex, rightIndex, nums ) {
        [ nums[rightIndex], nums[leftIndex] ]  = [ nums[leftIndex], nums[rightIndex] ];   
}

var nextPermutation = function(nums) {
        let leftIndex = -1;
        let rightIndex = nums.length - 1;
        
        for( let i=nums.length-1; i>=0; i-- ) {
                if( nums[i] > nums[i-1] ) {
                        leftIndex = i-1;
                        break;
                }
        }
        
        if( leftIndex == -1 ) {
                return nums.reverse();
        }
        
        for( let i=nums.length-1; i>=0; i-- ) {
                if( nums[i] > nums[leftIndex] ) {
                        rightIndex = i;
                        break;
                }
        }
        
        swap_index_values(leftIndex, rightIndex, nums);
        
        //REVERSE THE ELEMENTS OF THE ARRAY FROM leftIndex to rightIndex
        leftIndex++;
        rightIndex = nums.length-1;
        
        while( leftIndex < rightIndex ) {
                swap_index_values(leftIndex, rightIndex, nums);
                leftIndex++;
                rightIndex--;
        }
                
        return nums;
};