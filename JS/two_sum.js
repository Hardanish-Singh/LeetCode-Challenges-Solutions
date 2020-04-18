/*
      Given an array of integers, return indices of the two numbers such that they add up to a specific target.

      You may assume that each input would have exactly one solution, and you may not use the same element twice.

      Example:

      Given nums = [2, 7, 11, 15], target = 9,

      Because nums[0] + nums[1] = 2 + 7 = 9,
      return [0, 1].
*/
function binarySearch(arr, target) {
  var midpoint = Math.floor(arr.length / 2);

  if (arr[midpoint] === target) {
    return arr[midpoint];
  }
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr[midpoint] > target) {
    return binarySearch(arr.slice(0, midpoint), target);
  } else if (arr[midpoint] < target) {
    return binarySearch(arr.slice(midpoint), target);
  }
}

function bruteForceTwoSumCombination(nums, target) {
  let sortedArray = [...nums].sort((a, b) => a - b);
  let closestMatch = binarySearch(sortedArray, target);
  let valueArray = new Array();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + closestMatch === target) {
      valueArray.push(nums[i]);
      valueArray.push(closestMatch);
      return valueArray.sort();
    }
  }

  if (valueArray.length === 0) {
    let copyNumArray = [...nums];
    for (let k = 0; k < copyNumArray.length; k++) {
      if (copyNumArray[k] === closestMatch) {
        copyNumArray.splice(k, 1);
        break;
      }
    }
    return bruteForceTwoSumCombination(copyNumArray, target);
  }
}

var twoSum = function (nums, target) {
  let arrs = bruteForceTwoSumCombination(nums, target);
  let indexArray = [];

  for (let t = 0; t < arrs.length; t++) {
    if (indexArray.includes(nums.indexOf(arrs[t]))) {
      if (t + 1 == nums.length) indexArray.push(nums.indexOf(arrs[t], t));
      else indexArray.push(nums.indexOf(arrs[t], indexArray[t - 1] + 1));
      continue;
    }
    indexArray.push(nums.indexOf(arrs[t]));
  }

  return indexArray.sort();
};
