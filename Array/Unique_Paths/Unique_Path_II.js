/**
 * @param { number[][] } obstacleGrid
 * @return { number }
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
        let row = obstacleGrid.length;
        let column = obstacleGrid[0].length;

        // If the starting cell has an obstacle, then simply return as there would be no paths to the destination.
        if (obstacleGrid[0][0] == 1) {
                return 0;
        }

        obstacleGrid[0][0] = 1;

        // Filling the values for the first column
        let isObstacleFound = false;
        for (let i = 1; i < row; i++) {
                if (isObstacleFound || obstacleGrid[i][0] === 1) {
                        obstacleGrid[i][0] = 0;
                        isObstacleFound = true;
                } else {
                        obstacleGrid[i][0] = 1;
                }
        }

        // Filling the values for the first row
        isObstacleFound = false;
        for (let i = 1; i < column; i++) {
                if (isObstacleFound || obstacleGrid[0][i] === 1) {
                        obstacleGrid[0][i] = 0;
                        isObstacleFound = true;
                } else {
                        obstacleGrid[0][i] = 1;
                }
        }

        for (let i = 1; i < row; i++) {
                for (let j = 1; j < column; j++) {
                        if (obstacleGrid[i][j] == 0) {
                                if (obstacleGrid[i - 1][j] == 0 && obstacleGrid[i][j - 1] == 0) {
                                        obstacleGrid[i][j] = 0;
                                } else {
                                        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                                }
                        } else {
                                obstacleGrid[i][j] = 0;
                        }
                }
        }
        return obstacleGrid[row - 1][column - 1];
};
