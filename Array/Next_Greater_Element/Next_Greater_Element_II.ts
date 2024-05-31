// Leetcode: https://leetcode.com/problems/next-greater-element-ii/

const nextGreaterElements = (nums: number[]): number[] => {
    let circularNums: number[] = [...nums, ...nums];
    return nums.reduce((accumulator: number[], num: number, index: number) => {
        const nextGreaterNumberIndex = circularNums.findIndex((x, i) => i > index && x > num);
        accumulator.push(circularNums[nextGreaterNumberIndex] ?? -1);
        return accumulator;
    }, []);
};
