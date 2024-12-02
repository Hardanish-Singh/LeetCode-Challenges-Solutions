// Leetcode: https://leetcode.com/problems/valid-mountain-array/

const validMountainArray = (arr: number[]): boolean => {
    let peak = arr.indexOf(Math.max(...arr));
    if (peak == 0 || peak == arr.length - 1) {
        return false;
    }
    // Check for strickly increasing elements
    const isStrictlyIncreasing = arr.slice(0, peak).some((el, i, subArr) => el >= subArr[i + 1]);
    if (isStrictlyIncreasing) return false;

    // Check for strickly decresing elements
    const isStrictlyDecreasing = arr.slice(peak).some((el, i, subArr) => el <= subArr[i + 1]);
    if (isStrictlyDecreasing) return false;

    return true;
};
