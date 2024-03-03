// Leetcode: https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (array: number[], target: number): number => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === array[mid]) {
            return mid;
        }
        if (array[start] <= array[mid]) {
            if (target >= array[start] && target < array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > array[mid] && target <= array[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
};
