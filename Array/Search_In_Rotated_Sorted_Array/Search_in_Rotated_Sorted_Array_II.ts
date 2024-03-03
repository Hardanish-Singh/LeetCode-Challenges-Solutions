// Leetcode: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

const search = (array: number[], target: number): boolean => {
    array = Array.from(new Set(array));
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === array[mid]) {
            return true;
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

    return false;
};
