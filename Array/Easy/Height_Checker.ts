// Leetcode: https://leetcode.com/problems/height-checker/

const heightChecker = (heights: Array<number>): number => {
        var expected = [...heights].sort((a, b) => a - b);
        var differentHeights = 0;
        for (let i = 0; i < heights.length; i++) {
                if (heights[i] !== expected[i]) {
                        differentHeights++;
                }
        }
        return differentHeights;
};
