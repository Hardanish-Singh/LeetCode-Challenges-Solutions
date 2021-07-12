/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var twoSumLessThanK = function( nums, target )
{
        let min = -1;
        let difference = -1;
        for( let i=0; i<nums.length; i++ )
        {
                for( let j=i+1; j<nums.length; j++ )
                {
                        if( nums[i] + nums[j] < target )
                        {
                                if( target - (nums[i] + nums[j]) > 0 )
                                {
                                        if( difference == -1 )
                                        {
                                                difference = target - (nums[i] + nums[j]);
                                                min = nums[i] + nums[j];
                                        }
                                        else
                                        {
                                                if( target - (nums[i] + nums[j]) < difference )
                                                {
                                                        difference = target - (nums[i] + nums[j]);
                                                        min = nums[i] + nums[j];
                                                }
                                        }
                                }
                        }
                }
        }
        return min;
};
