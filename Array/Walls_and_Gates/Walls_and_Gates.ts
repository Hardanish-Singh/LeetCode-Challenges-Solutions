// Leetcode: https://leetcode.com/problems/walls-and-gates/

/**
 Do not return anything, modify rooms in-place instead.
*/

const wallsAndGates = (rooms: number[][]): void => {
    let m = rooms.length;
    let n = rooms[0].length;
    let count = 0;

    const dfs = (row: number, column: number, count: number): void => {
        // out of bounds
        if (row < 0 || row >= m || column < 0 || column >= n) {
            return;
        }

        // encountered an obstacle
        if (rooms[row][column] === -1) {
            return;
        }

        // encountered another gate
        if (rooms[row][column] === 0 && count !== 0) {
            return;
        }

        // current count value > current room value
        if (count > rooms[row][column]) {
            return;
        }

        const min = Math.min(rooms[row][column], count);
        rooms[row][column] = min;

        if (row + 1 < m && count + 1 < rooms[row + 1][column]) {
            dfs(row + 1, column, count + 1);
        }
        if (row > 0 && count + 1 < rooms[row - 1][column]) {
            dfs(row - 1, column, count + 1);
        }
        if (column + 1 < n && count + 1 < rooms[row][column + 1]) {
            dfs(row, column + 1, count + 1);
        }
        if (column > 0 && rooms[row][column - 1]) {
            dfs(row, column - 1, count + 1);
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Found a gate, we need to run DFS to find minimum distance to its nearest gate
            if (rooms[i][j] === 0) {
                dfs(i, j, count);
            }
        }
    }
};
