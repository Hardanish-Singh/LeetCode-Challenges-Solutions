// Leetcode: https://leetcode.com/problems/richest-customer-wealth/

const maximumWealth = (accounts: number[][]): number => {
    let maxWealth = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b, 0);
        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};
