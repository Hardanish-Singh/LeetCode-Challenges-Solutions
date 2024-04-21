// Leetcode: https://leetcode.com/problems/unique-paths-iii/

const uniquePathsIII = (grid: number[][]): number => {
    let m = grid.length;
    let n = grid[0].length;
    let nonObstacleSquares = 0;
    let startRow = 0;
    let startCol = 0;
    let result = 0;
    let count = 1;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                startRow = r;
                startCol = c;
            }
            if (grid[r][c] !== -1) {
                nonObstacleSquares++;
            }
        }
    }

    const DFSWithBacktrack = (row: number, column: number, count: number): void => {
        // Out of Bounds
        if (row < 0 || row >= m || column < 0 || column >= n) {
            return;
        }
        // Encountered an Obstacle
        if (grid[row][column] === -1) {
            return;
        }
        // Base Case / Reach Destination
        if (grid[row][column] === 2) {
            if (count === nonObstacleSquares) {
                result++;
            }
            return;
        }

        const original = grid[row][column]; // Save visited cell
        grid[row][column] = -1; // Simply replace "original cell" with a "-1" when visiting an empty cell and put back the "original cell" after returning. This will avoid revisiting the same cell again.
        DFSWithBacktrack(row + 1, column, count + 1); // MoveDown
        DFSWithBacktrack(row, column + 1, count + 1); // MoveRight
        DFSWithBacktrack(row - 1, column, count + 1); // MoveTop
        DFSWithBacktrack(row, column - 1, count + 1); // MoveBottom
        // After backtrack free visited cell to Original Position for other possible paths
        grid[row][column] = original;
    };

    DFSWithBacktrack(startRow, startCol, count);
    return result;
};
