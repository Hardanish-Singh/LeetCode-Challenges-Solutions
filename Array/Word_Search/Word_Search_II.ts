// Leetcode: https://leetcode.com/problems/word-search-ii/

const findWords = (board: string[][], words: string): string[] => {
    const m = board.length;
    const n = board[0].length;
    let set = new Set<string>();
    let list = new Set<string>();
    let max: number = Number.NEGATIVE_INFINITY;

    for (const word of words) {
        set.add(word);
        max = Math.max(max, word.length);
    }

    const DFSWithBacktrack = (row: number, column: number, word: string = "") => {
        // out of bounds
        if (row < 0 || row >= m || column < 0 || column >= n) {
            return;
        }
        // skip "-1"
        if (board[row][column] === "-1") {
            return;
        }
        // current word length > max word length
        if (word.length > max) {
            return;
        }

        word += board[row][column];
        if (set.has(word)) {
            list.add(word);
        }

        let original = board[row][column];
        board[row][column] = "-1";

        DFSWithBacktrack(row + 1, column, word);
        DFSWithBacktrack(row, column + 1, word);
        DFSWithBacktrack(row - 1, column, word);
        DFSWithBacktrack(row, column - 1, word);

        board[row][column] = original;
        word = "";
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            DFSWithBacktrack(i, j);
        }
    }

    return Array.from(list);
};
