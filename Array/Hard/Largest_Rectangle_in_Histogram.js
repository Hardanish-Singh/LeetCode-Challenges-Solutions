// Leetcode: https://leetcode.com/problems/largest-rectangle-in-histogram/

const largestRectangleArea = (buildings) => {
    let maxArea = 0;

    for (let i = 0; i < buildings.length; i++) {
        let width = 1;
        let height = Number.MAX_VALUE;
        for (let j = i; j < buildings.length; j++) {
            height = Math.min(height, buildings[j]);
            let area = width * height;
            maxArea = Math.max(area, maxArea);
            width++;
        }
    }

    return maxArea;
};
