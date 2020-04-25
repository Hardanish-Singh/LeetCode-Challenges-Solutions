var threeSumClosest = function (nums, target) {
  // SORT THE ARRAY
  nums.sort((a, b) => a - b);

  let leftPosition = 0,
    rightPosition = 0,
    lthPosition = 0,
    rthPosition = 0;
  let threePairSumMultiDimensionArray = new Array();

  // LOOP THROUGH ARRAY
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    leftPosition = nums[i + 1];
    rightPosition = nums[nums.length - 1];
    lthPosition = i + 1;
    rthPosition = nums.length - 1;
    if (leftPosition === undefined || rightPosition === undefined) break;
    if (lthPosition === rthPosition) break;

    while (true) {
      if (nums[i] + leftPosition + rightPosition == target) {
        threePairSumMultiDimensionArray.push(
          nums[i] + leftPosition + rightPosition
        );
        lthPosition++;
        rthPosition--;
        while (nums[lthPosition] == leftPosition) lthPosition++;
        while (nums[rthPosition] == rightPosition) rthPosition--;
        leftPosition = nums[lthPosition];
        rightPosition = nums[rthPosition];
      } else if (nums[i] + leftPosition + rightPosition < target) {
        threePairSumMultiDimensionArray.push(
          nums[i] + leftPosition + rightPosition
        );
        lthPosition++;
        while (nums[lthPosition] == leftPosition) lthPosition++;
        leftPosition = nums[lthPosition];
      } else if (nums[i] + leftPosition + rightPosition > target) {
        threePairSumMultiDimensionArray.push(
          nums[i] + leftPosition + rightPosition
        );
        rthPosition--;
        while (nums[rthPosition] == rightPosition) rthPosition--;
        rightPosition = nums[rthPosition];
      }
      if (lthPosition === rthPosition || lthPosition > rthPosition) break;
    }
  }

  var closest = threePairSumMultiDimensionArray.reduce(function (prev, curr) {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  });

  return closest;
};
