/*
    Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? 
    Find all unique quadruplets in the array which gives the sum of target.

    Note:

    The solution set must not contain duplicate quadruplets.

    Example:

    Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

    A solution set is:
    [
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
    ]
*/
var fourSum = function (nums, target) {
  // SORT THE ARRAY
  nums.sort((a, b) => a - b);

  let leftPosition = 0,
    rightPosition = 0,
    lthPosition = 0,
    rthPosition = 0;
  let threePairSumMultiDimensionArray = new Array();
  let flag = false;

  // LOOP THROUGH ARRAY
  for (let i = 0; i < nums.length; i++) {
    flag = false;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (flag == true && nums[j] === nums[j - 1]) continue;
      leftPosition = nums[j + 1];
      rightPosition = nums[nums.length - 1];
      lthPosition = j + 1;
      rthPosition = nums.length - 1;
      if (leftPosition === undefined || rightPosition === undefined) break;
      if (lthPosition === rthPosition) break;

      while (true) {
        if (nums[i] + nums[j] + leftPosition + rightPosition == target) {
          threePairSumMultiDimensionArray.push(
            new Array(nums[i], nums[j], leftPosition, rightPosition)
          );
          lthPosition++;
          rthPosition--;
          while (nums[lthPosition] == leftPosition) lthPosition++;
          while (nums[rthPosition] == rightPosition) rthPosition--;
          leftPosition = nums[lthPosition];
          rightPosition = nums[rthPosition];
        } else if (nums[i] + nums[j] + leftPosition + rightPosition < target) {
          lthPosition++;
          while (nums[lthPosition] == leftPosition) lthPosition++;
          leftPosition = nums[lthPosition];
        } else if (nums[i] + nums[j] + leftPosition + rightPosition > target) {
          rthPosition--;
          while (nums[rthPosition] == rightPosition) rthPosition--;
          rightPosition = nums[rthPosition];
        }
        if (lthPosition === rthPosition || lthPosition > rthPosition) break;
      }
      flag = true;
    }
  }
  return threePairSumMultiDimensionArray;
};
