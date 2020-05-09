/*
    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
    Find all unique triplets in the array which gives the sum of zero.

    Note:

    The solution set must not contain duplicate triplets.

    Example:
      Given array nums = [-1, 0, 1, 2, -1, -4],
      A solution set is:
          [
              [-1, 0, 1],
              [-1, -1, 2]
          ]
*/
var threeSum = function(nums) {
  // SORT THE ARRAY
  nums.sort((a, b) => a - b);

  let leftPosition = 0, rightPosition = 0, lthPosition = 0, rthPosition = 0;
  let threePairSumMultiDimensionArray = new Array();

  // LOOP THROUGH ARRAY
  for (let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i-1]) continue;
    leftPosition = nums[i + 1];
    rightPosition = nums[nums.length - 1];
    lthPosition = i + 1;
    rthPosition = nums.length - 1;
    if (leftPosition === undefined || rightPosition === undefined) break;
    if (lthPosition === rthPosition) break;

    while (true) {
      if (nums[i] + leftPosition + rightPosition == 0) {
        threePairSumMultiDimensionArray.push(
          new Array(nums[i], leftPosition, rightPosition)
        );
        lthPosition++;
        rthPosition--;
        while (nums[lthPosition] == leftPosition) lthPosition++;
        while (nums[rthPosition] == rightPosition) rthPosition--;
        leftPosition = nums[lthPosition];
        rightPosition = nums[rthPosition];
      } else if (nums[i] + leftPosition + rightPosition < 0) {
        lthPosition++;
        while (nums[lthPosition] == leftPosition) lthPosition++;
        leftPosition = nums[lthPosition];
      } else if (nums[i] + leftPosition + rightPosition > 0) {
        rthPosition--;
        while (nums[rthPosition] == rightPosition) rthPosition--;
        rightPosition = nums[rthPosition];
      }
      if (lthPosition === rthPosition || lthPosition > rthPosition) break; 
    }
  }
  return threePairSumMultiDimensionArray; 
};

