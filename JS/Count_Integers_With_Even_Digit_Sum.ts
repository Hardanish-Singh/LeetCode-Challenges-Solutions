// Leetcode: https://leetcode.com/problems/count-integers-with-even-digit-sum/

var countEven = (num: number): number => {
    // prettier-ignore
    return Array
                .from({ length: num }, (_, i) => i + 1)
                .filter((i) => String(i).split('').map(Number).reduce((a, b) => a + b, 0) % 2 === 0 ).length;
};
