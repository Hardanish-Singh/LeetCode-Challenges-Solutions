/*
      Given an array of integers, return indices of the two numbers such that they add up to a specific target.

      You may assume that each input would have exactly one solution, and you may not use the same element twice.

      Example:
        Given nums = [2, 7, 11, 15], target = 9,
        Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0, 1].
*/
var twoSum = function(nums, target) {
    let twoPointerArray = [...nums].sort((a, b) => a-b);
    let leftPosition = 0, rightPosition = 0, lthPosition = 0, rthPosition = 0;
    let finalArray = new Array();

    for (let i = 0; i < twoPointerArray.length; i++) {
      leftPosition = twoPointerArray[i];
      rightPosition = twoPointerArray[twoPointerArray.length - 1];
      lthPosition = i;
      rthPosition = twoPointerArray.length - 1;
      if (leftPosition === undefined || rightPosition === undefined) break;
      if (lthPosition === rthPosition) break;

      while(true) {
        if (leftPosition + rightPosition == target) {
           i = twoPointerArray.length;
           break;
        } else if (leftPosition + rightPosition < target) {
            lthPosition++;
            while (twoPointerArray[lthPosition] == leftPosition) lthPosition++;  
            leftPosition = twoPointerArray[lthPosition];
        } else if (leftPosition + rightPosition > target) {
            rthPosition--;
            while (twoPointerArray[rthPosition] == rightPosition) rthPosition--;
            rightPosition = twoPointerArray[rthPosition];
        }
        if (lthPosition === rthPosition || lthPosition > rthPosition) break;
      } 
    }

    finalArray.push(nums.indexOf(leftPosition), nums.lastIndexOf(rightPosition));
    return finalArray;
};
