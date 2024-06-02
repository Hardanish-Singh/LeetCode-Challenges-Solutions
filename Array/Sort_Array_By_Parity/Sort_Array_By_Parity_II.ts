// Leetcode: https://leetcode.com/problems/sort-array-by-parity-ii/

// Solution 1
var sortArrayByParityII = (nums: number[]): number[] => {
    const odds: number[] = [];
    const evens: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }

    return nums.reduce((accumulator: number[], _, i) => {
        if (i % 2 === 0) {
            accumulator.push(evens.pop() as number);
        } else {
            accumulator.push(odds.pop() as number);
        }
        return accumulator;
    }, []);
};

// Solution 2
var sortArrayByParityII = (nums: number[]): number[] => {
    const [odds, evens]: [number[], number[]] = [[], []];

    nums.reduce((acc: number, num: number) => {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
        return acc;
    }, 0);

    return nums.reduce((accumulator: number[], _, i) => {
        if (i % 2 === 0) {
            accumulator.push(evens.pop() as number);
        } else {
            accumulator.push(odds.pop() as number);
        }
        return accumulator;
    }, []);
};

// Solution 3
var sortArrayByParityII = (nums: number[]): number[] => {
    const [odds, evens]: [number[], number[]] = [[], []];

    nums.reduceRight((accumulator, currentValue: number) => {
        if (currentValue % 2 === 0) {
            evens.push(currentValue);
        } else {
            odds.push(currentValue);
        }
        return accumulator;
    }, nums[nums.length - 1]);

    return nums.reduce((accumulator: number[], _, i) => {
        if (i % 2 === 0) {
            accumulator.push(evens.pop() as number);
        } else {
            accumulator.push(odds.pop() as number);
        }
        return accumulator;
    }, []);
};

// Solution 4
var sortArrayByParityII = (nums: number[]): number[] => {
    let evenIndex = -1;
    let oddIndex = -1;

    return nums.reduce((accumulator: number[], _, i, nums) => {
        if (i % 2 === 0) {
            evenIndex = nums.findIndex((num: number, index: number) => {
                return num % 2 === 0 && index > evenIndex;
            });
            accumulator.push(nums[evenIndex]);
        } else {
            oddIndex = nums.findIndex((num: number, index: number) => {
                return num % 2 !== 0 && index > oddIndex;
            });
            accumulator.push(nums[oddIndex]);
        }
        return accumulator;
    }, []);
};

// Solution 5
// @ts-ignore for ignoring type error
var sortArrayByParityII = (nums: number[], evenIndex?: number, oddIndex?: number): number[] =>
    nums.reduce((accumulator: number[], _, i, nums) => {
        if (i % 2 === 0) {
            evenIndex = nums.findIndex((num: number, index: number) => {
                return num % 2 === 0 && index > (evenIndex ?? -1);
            });
            accumulator.push(nums[evenIndex]);
        } else {
            oddIndex = nums.findIndex((num: number, index: number) => {
                return num % 2 !== 0 && index > (oddIndex ?? -1);
            });
            accumulator.push(nums[oddIndex]);
        }
        return accumulator;
    }, []);
