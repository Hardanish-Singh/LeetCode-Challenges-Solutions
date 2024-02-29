// Leetcode: https://leetcode.com/problems/surrounded-regions/

const solve = (board: string[][]): void => {
    const m = board.length;
    const n = board[0].length;

    const dfs = (i: number, j: number): void => {
        if (i < 0 || i > m - 1 || j < 0 || j > n - 1 || board[i][j] === "X" || board[i][j] === "*") {
            return;
        }

        board[i][j] = "*";

        dfs(i - 1, j); // move up
        dfs(i + 1, j); // move down
        dfs(i, j - 1); // move left
        dfs(i, j + 1); // move right
    };

    // NOTE: Any 'O' connected to a boundary can't be turned to 'X'
    /*
        Traverse along the first and last column to find if there is any "O"
            1) If we find any "O" we will do DFS and find all adjacent "O" which should not be flipped and turn 'O' to '*'.
    */
    for (let i = 0; i < m; i++) {
        if (board[i][0] === "O") {
            dfs(i, 0);
        }
        if (board[i][n - 1] === "O") {
            dfs(i, n - 1);
        }
    }

    /*
        Traverse along the first and last row to find if there is any "O"
            1) If we find any "O" we will do DFS and find all adjacent "O" which should not be flipped and turn 'O' to '*'.
    */
    for (let j = 0; j < n; j++) {
        if (board[0][j] === "O") {
            dfs(0, j);
        }
        if (board[m - 1][j] === "O") {
            dfs(m - 1, j);
        }
    }

    // Post-processing, turn 'O' to 'X', '*' back to 'O', keep 'X' intact.
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
