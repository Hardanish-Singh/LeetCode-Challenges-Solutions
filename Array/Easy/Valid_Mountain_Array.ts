// Leetcode: https://leetcode.com/problems/valid-mountain-array/

const validMountainArray = (arr: number[]): boolean => {
    let peak = arr.indexOf(Math.max(...arr));
    if (peak == 0 || peak == arr.length - 1) {
        return false;
    }
    // Check for strickly increasing elements
    for (let i = 0; i < peak; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    // Check for strickly decresing elements
    for (let i = peak; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }
    return true;
};
