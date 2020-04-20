/*
    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

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
function multiDimensionalUnique(arr) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

var threeSum = function (nums) {
  // SORT THE ARRAY
  nums.sort((a, b) => a - b);

  if (nums.length > 3) {
    let flags = false;
    for (let i = 0; i < nums.length; i++) {
      flags = nums.every((val, i, arr) => val === arr[0]);
    }
    if (flags === true) {
      let a = nums[0];
      nums = [];
      for (let i = 0; i < 3; i++) {
        nums.push(a);
      }
    }
  }

  let leftPosition = 0,
    rightPosition = 0,
    totalSum = 0,
    lthPosition = 0,
    rthPosition = 0;
  let threePairSumMultiDimensionArray = new Array();

  // LOOP THROUGH ARRAY
  for (let i = 0; i < nums.length; i++) {
    leftPosition = nums[i + 1];
    rightPosition = nums[nums.length - 1];
    lthPosition = i + 1;
    rthPosition = nums.length - 1;
    if (leftPosition === undefined || rightPosition === undefined) break;
    if (lthPosition === rthPosition) break;

    while (true) {
      totalSum = nums[i] + leftPosition + rightPosition;
      if (totalSum == 0) {
        threePairSumMultiDimensionArray.push(
          new Array(nums[i], leftPosition, rightPosition)
        );
        lthPosition++;
        rthPosition--;
        leftPosition = nums[lthPosition];
        rightPosition = nums[rthPosition];
      } else if (totalSum < 0) {
        lthPosition++;
        while (nums[lthPosition] == leftPosition) {
          lthPosition++;
        }
        leftPosition = nums[lthPosition];
      } else if (totalSum > 0) {
        rthPosition--;
        while (nums[rthPosition] == rightPosition) {
          rthPosition--;
        }
        rightPosition = nums[rthPosition];
      }
      if (lthPosition === rthPosition || lthPosition > rthPosition) {
        break;
      }
    }
  }
  threePairSumMultiDimensionArray = multiDimensionalUnique(
    threePairSumMultiDimensionArray
  );
  return threePairSumMultiDimensionArray;
};
