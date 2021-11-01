/*
 * @param {number[]} nums
 * @return {number[][]}
*/

function swap_index_values( leftIndex, rightIndex, nums ) {
        let temp = nums[leftIndex];
        nums[leftIndex] = nums[rightIndex];
        nums[rightIndex] = temp;       
}

var nextPermutation = function(nums) {
        let leftIndex = -1;
        let rightIndex = -1;
        
        for( let i=nums.length-1; i>=0; i-- ){
                if( nums[i] > nums[i-1] ) {
                        leftIndex = i-1;
                        break;
                }
        }
        
        if( leftIndex == -1 ) {
                return nums.reverse();
        }
        
        for( let i=nums.length-1; i>=0; i-- ){
                if( nums[i] > nums[leftIndex] ) {
                        rightIndex = i;
                        break;
                }
        }
        
        if( rightIndex == -1 ) {
             rightIndex = nums.length-1;  
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