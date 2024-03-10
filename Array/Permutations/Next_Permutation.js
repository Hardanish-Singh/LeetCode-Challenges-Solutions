/*
 * @param { number[] } nums
 * @return { number[][] }
 */

var nextPermutation = function (nums) {
    let leftIndex = -1;
    let rightIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            leftIndex = i - 1;
            break;
        }
    }

    if (leftIndex == -1) {
        return nums.reverse();
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[leftIndex]) {
            rightIndex = i;
            break;
        }
    }

    // Swap Left & Right Index Values
    [nums[rightIndex], nums[leftIndex]] = [nums[leftIndex], nums[rightIndex]];

    // Finally, Reverse The Elements of nums from leftIndex to rightIndex
    leftIndex++;
    rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
        // Swap Left & Right Index Values
        [nums[rightIndex], nums[leftIndex]] = [nums[leftIndex], nums[rightIndex]];
        leftIndex++;
        rightIndex--;
    }

    return nums;
};
