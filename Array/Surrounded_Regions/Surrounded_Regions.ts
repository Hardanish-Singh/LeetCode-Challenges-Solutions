const solve = (board: string[][]): void => {
    const m = board.length;
    const n = board[0].length;

    const dfs = (i: number, j: number): void => {
        // Out of bounds check
        if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
            return;
        }

        if (board[i][j] === "O") {
            board[i][j] = "*";
            // move up
            if (i > 1) {
                dfs(i - 1, j);
            }
            // move down
            if (i < m - 2) {
                dfs(i + 1, j);
            }
            // move left
            if (j > 1) {
                dfs(i, j - 1);
            }
            // move right
            if (j < n - 2) {
                dfs(i, j + 1);
            }
        }
    };

    // Any 'O' connected to a boundary can't be turned to 'X'
    // Start from first and last column, turn 'O' to '*'.
    for (let i = 0; i < m; i++) {
        if (board[i][0] === "O") {
            dfs(i, 0);
        }
        if (board[i][n - 1] === "O") {
            dfs(i, n - 1);
        }
    }

    // Start from first and last row, turn '0' to '*'
    for (let j = 0; j < n; j++) {
        if (board[0][j] === "O") {
            dfs(0, j);
        }
        if (board[m - 1][j] === "O") {
            dfs(m - 1, j);
        }
    }

    // post-processing, turn 'O' to 'X', '*' back to 'O', keep 'X' intact.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            } else if (board[i][j] === "*") {
                board[i][j] = "O";
            }
        }
    }
};
