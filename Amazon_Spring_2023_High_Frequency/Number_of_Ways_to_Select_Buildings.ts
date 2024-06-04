// Leetcode: https://leetcode.com/problems/number-of-ways-to-select-buildings/

// We are looking for 010 or 101 combinations.
const numberOfWays = (s: string, cnt0: number = 0, cnt1: number = 0, cnt01: number = 0, cnt10: number = 0): number =>
    s.split("").reduce((acc, curr) => {
        if (curr === "0") {
            cnt0++;
            cnt01 += cnt1;
            acc += cnt10;
        } else {
            cnt1++;
            cnt10 += cnt0;
            acc += cnt01;
        }
        return acc;
    }, 0);
