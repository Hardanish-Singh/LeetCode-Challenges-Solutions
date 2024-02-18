// https://leetcode.com/problems/unique-paths-ii/

// Solution 1: Recursion (TLE)
const uniquePathsWithObstacles1 = (obstacleGrid: number[][], row: number = 0, column: number = 0): number => {
    // Out of Bounds/Grid Check or Obstacle Check
    if (row >= obstacleGrid.length || column >= obstacleGrid[0].length || obstacleGrid[row][column] === 1) {
        return 0;
    }

    // Base Case / Reach Destination
    if (row === obstacleGrid.length - 1 && column === obstacleGrid[0].length - 1) {
        return 1;
    }

    const moveDown = uniquePathsWithObstacles1(obstacleGrid, row + 1, column);
    const moveRight = uniquePathsWithObstacles1(obstacleGrid, row, column + 1);
    return moveDown + moveRight;
};

// Solution 2: Recursion with Memoization/Caching
const uniquePathsWithObstacles2 = (
    obstacleGrid: number[][],
    row: number = 0,
    column: number = 0,
    cache: Record<string, number> = {}
): number => {
    // Out of Bounds/Grid Check or Obstacle Check
    if (row >= obstacleGrid.length || column >= obstacleGrid[0].length || obstacleGrid[row][column] === 1) {
        return 0;
    }

    // Base Case / Reach Destination
    if (row === obstacleGrid.length - 1 && column === obstacleGrid[0].length - 1) {
        return 1;
    }

    const key = `${row},${column}`;
    if (key in cache) {
        return cache[key];
    }

    const moveDown = uniquePathsWithObstacles2(obstacleGrid, row + 1, column, cache);
    const moveRight = uniquePathsWithObstacles2(obstacleGrid, row, column + 1, cache);
    cache[key] = moveDown + moveRight;
    return cache[key];
};
