// Leetcode: https://leetcode.com/problems/word-search/

const exist = (board: string[][], word: string): boolean => {
    const m = board.length;
    const n = board[0].length;

    const dfs = (row: number, column: number, index: number = 0): boolean => {
        if (index === word.length) {
            return true;
        }
        // out of bounds
        if (row < 0 || row >= m || column < 0 || column >= n) {
            return false;
        }
        // if the character in our word DOES NOT equal the current grid cell
        if (word[index] !== board[row][column]) {
            return false;
        }
        if (board[row][column] === ".") {
            return false;
        }

        const original = board[row][column]; // Save visited cell
        board[row][column] = ".";

        const moveDown = dfs(row + 1, column, index + 1);
        const moveUp = dfs(row - 1, column, index + 1);
        const moveRight = dfs(row, column + 1, index + 1);
        const moveLeft = dfs(row, column - 1, index + 1);

        board[row][column] = original;

        return moveDown || moveUp || moveRight || moveLeft;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j)) {
                return true;
            }
        }
    }

    return false;
};
