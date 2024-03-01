// Leetcode: https://leetcode.com/problems/walls-and-gates/

const wallsAndGates = (rooms: number[][]): void => {
    let m = rooms.length;
    let n = rooms[0].length;

    const dfs = (row: number, column: number, count: number): void => {
        // out of bounds
        if (row < 0 || row >= m || column < 0 || column >= n) {
            return;
        }
        // encountered an obstacle
        if (rooms[row][column] === -1) {
            return;
        }
        // encountered another gate and count > 0 ( which means we have made atleast 1 move down, up, right and left )
        if (rooms[row][column] === 0 && count > 0) {
            return;
        }

        const min = Math.min(rooms[row][column], count);
        rooms[row][column] = min;

        if (row + 1 < m && count + 1 < rooms[row + 1][column]) {
            dfs(row + 1, column, count + 1); // move down
        }
        if (row > 0 && count + 1 < rooms[row - 1][column]) {
            dfs(row - 1, column, count + 1); // move up
        }
        if (column + 1 < n && count + 1 < rooms[row][column + 1]) {
            dfs(row, column + 1, count + 1); // move right
        }
        if (column > 0 && rooms[row][column - 1]) {
            dfs(row, column - 1, count + 1); // move left
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Found a gate, we need to run DFS to find minimum distance to its nearest gate
            if (rooms[i][j] === 0) {
                dfs(i, j, 0);
            }
        }
    }
};
