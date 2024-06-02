// Leetcode: https://leetcode.com/problems/sort-even-and-odd-indices-independently/

// Solution 1
var sortEvenOdd = (nums: number[]): number[] => {
    const evenNumbers: number[] = [];
    const oddNumbers: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? evenNumbers.push(nums[i]) : oddNumbers.push(nums[i]);
    }

    evenNumbers.sort((a, b) => a - b);
    oddNumbers.sort((a, b) => b - a);

    var index = 0;
    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? result.push(evenNumbers[index]) : result.push(oddNumbers[index++]);
    }
    return result;
};

// Solution 2
var sortEvenOdd = (nums: number[]): number[] => {
    const evenNumbers: number[] = [];
    const oddNumbers: number[] = [];

    nums.reduceRight((accumulator, currentValue: number, currentIndex: number, nums: number[]) => {
        if (currentIndex % 2 === 0) {
            evenNumbers.push(currentValue);
        } else {
            oddNumbers.push(currentValue);
        }
        return accumulator;
    }, nums[nums.length - 1]);

    evenNumbers.sort((a, b) => a - b);
    oddNumbers.sort((a, b) => b - a);

    let index = 0;
    return nums.reduce((accumulator: number[], _, i) => {
        if (i % 2 === 0) {
            accumulator.push(evenNumbers[index]);
        } else {
            accumulator.push(oddNumbers[index++]);
        }
        return accumulator;
    }, []);
};
