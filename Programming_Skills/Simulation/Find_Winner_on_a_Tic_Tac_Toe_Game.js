// Leetcode: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

/**
 * @param {number[][]} moves
 * @return {string}
 */

const tictactoe = (moves) => {
    let count = 0;
    const winingConditions = [
        // Rows
        ["00", "01", "02"],
        ["10", "11", "12"],
        ["20", "21", "22"],
        // Columns
        ["00", "10", "20"],
        ["01", "11", "21"],
        ["02", "12", "22"],
        // Diagonals
        ["00", "11", "22"],
        ["02", "11", "20"],
    ];
    moves = moves.map((move) => move.join(""));

    for (let i = 0; i < winingConditions.length; i++) {
        // Player A
        for (let j = 0; j < moves.length; j += 2) {
            if (winingConditions[i].includes(moves[j])) {
                count++;
            }
            if (count === 3) {
                return "A";
            }
        }
        // Player B
        count = 0;
        for (let j = 1; j < moves.length; j += 2) {
            if (winingConditions[i].includes(moves[j])) {
                count++;
            }
            if (count === 3) {
                return "B";
            }
        }
        count = 0;
    }

    return moves.length === 9 ? "Draw" : "Pending";
};
