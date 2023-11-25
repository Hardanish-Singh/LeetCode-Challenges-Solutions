// Leetcode: https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */

const judgeCircle = (moves) => {
    let x = 0;
    let y = 0;

    for (const move of moves) {
        switch (move) {
            case "R":
                x += 1;
                break;
            case "L":
                x -= 1;
                break;
            case "U":
                y += 1;
                break;
            case "D":
                y -= 1;
                break;
        }
    }

    return x === 0 && y === 0;
};
