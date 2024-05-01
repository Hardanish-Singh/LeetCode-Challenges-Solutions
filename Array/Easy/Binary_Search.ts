// Leetcode: https://leetcode.com/problems/binary-search/

const search = (array: number[], key: number): number => {
    array.sort((a, b) => a - b);
    let start: number = 0;
    let end: number = array.length - 1;

    while (start <= end) {
        let midPoint: number = Math.floor((start + end) / 2);
        if (key === array[midPoint]) {
            return midPoint;
        }
        key > array[midPoint] ? (start = midPoint + 1) : (end = midPoint - 1);
    }

    return -1;
};
