// Leetcode: https://leetcode.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */

const lemonadeChange = (bills) => {
    let fives = 0, tens = 0;
    for (const bill of bills) {
        if (bill === 5) fives++;
        else if (bill === 10) {
            if (fives <= 0) return false;
            else fives--, tens++;
        } else if (bill === 20) {
            if (fives > 0 && tens > 0) fives--, tens--;
            else if (fives >= 3) fives -= 3;
            else return false;
        }
    }
    return true;
};