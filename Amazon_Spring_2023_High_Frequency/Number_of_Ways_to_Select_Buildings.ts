// Leetcode: https://leetcode.com/problems/number-of-ways-to-select-buildings/

/* 
    We are only looking for 010 or 101 combinations.
    cnt0: Respresents the number of 0s in the string
    cnt1: Respresents the number of 1s in the string
    cnt01: Represents the number of 01 combinations
    cnt10: Represents the number of 10 combinations

*/
const numberOfWays = (s: string, cnt0: number = 0, cnt1: number = 0, cnt01: number = 0, cnt10: number = 0): number =>
    s.split("").reduce((accumulator, curr) => {
        if (curr === "0") {
            cnt0++;
            cnt01 += cnt1;
            accumulator += cnt10;
        } else {
            cnt1++;
            cnt10 += cnt0;
            accumulator += cnt01;
        }
        return accumulator;
    }, 0);
