// Leetcode: https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} operations
 * @return {number}
 */

const calPoints = (operations) => {
    const scores = [];
    for (const operation of operations) {
        switch (operation) {
            case "+":
                let sum = scores.slice(-2).map(Number).reduce((a, b) => a + b, 0);
                scores.push(sum);
                break;
            case "D":
                let double = scores.slice(-1).map(Number) * 2;
                scores.push(double);
                break;
            case "C":
                scores.pop();
                break;
            default:
                scores.push(Number(operation));
        }
    }
    return scores.reduce((a, b) => a + b, 0);
};
