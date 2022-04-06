/*
        You are given an integer array height of length n. 
        There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
        Find two lines that together with the x-axis form a container, such that the container contains the most water.
        Return the maximum amount of water a container can store.
        Notice that you may not slant the container.

        Example 1:
                Input: height = [1,8,6,2,5,4,8,3,7]
                Output: 49
                Explanation: The above vertical lines are represented by array [1, 8, 6, 2, 5, 4, 8, 3, 7]. 
                In this case, the max area of water (blue section) the container can contain is 49.
        
        Example 2:
                Input: height = [1, 1]
                Output: 1
        
        Constraints:
                1) n == height.length
                2) 2 <= n <= 10^5
                3) 0 <= height[i] <= 10^4
*/

/*
 * @param { number[] } height
 * @return { number }
*/

var maxArea = function( heights ) {
        var leftPointer = 0;
        var rightPointer = heights.length - 1;
        var containerWithMostWater = -1;
        
        while( leftPointer < rightPointer ) {
                let min = Math.min( heights[ leftPointer ], heights[ rightPointer ] );
                let width = rightPointer - leftPointer;
                containerWithMostWater = Math.max( min * width, containerWithMostWater );
                heights[ rightPointer ] > heights[ leftPointer ] ? leftPointer++ : rightPointer--;
        }
        
        return containerWithMostWater;
};