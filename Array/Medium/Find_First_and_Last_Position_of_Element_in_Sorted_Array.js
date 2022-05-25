/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 */

var searchRange = function(nums, target) {
        return[ nums.indexOf( target ), nums.lastIndexOf( target ) ];
};