// Leetcode: https://leetcode.com/problems/container-with-most-water/

const maxArea = (heights: number[]): number => {
    let left = 0; // Left pointer starting from the leftmost edge
    let right = heights.length - 1; // Right pointer starting from the rightmost edge
    let containerWithMaxWater = 0; // Initialize the maximum water capacity

    while (left < right) {
        // Calculate the width of the container
        let width = right - left;

        // Calculate the height of the container (the minimum height between the two lines)
        let height = Math.min(heights[left], heights[right]);

        // Calculate the water capacity of the current container
        let waterCapacity = width * height;

        // Update the maximum water capacity if the current container holds more water
        containerWithMaxWater = Math.max(containerWithMaxWater, waterCapacity);

        // Move the pointers towards each other
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return containerWithMaxWater;
};
