// Leetcode: https://leetcode.com/problems/largest-rectangle-in-histogram/

// Solution 1
var largestRectangleArea = (buildings) => {
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

// Solution 2
var largestRectangleArea = (buildings) =>
    buildings.reduce((maxArea, _, i) => {
        let height = Number.MAX_VALUE;

        const areaFromI = buildings.slice(i).reduce((localMax, h, idx) => {
            height = Math.min(height, h);
            const width = idx + 1;
            return Math.max(localMax, width * height);
        }, 0);

        return Math.max(maxArea, areaFromI);
    }, 0);
