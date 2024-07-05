// Leetcode: https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

var garbageCollection = (garbage: string[], travel: number[]): number => {
    let g = -1;
    let m = -1;
    let p = -1;

    let res = 0;

    // Prefix sum of travel time
    for (let i = 1; i < travel.length; i++) {
        travel[i] += travel[i - 1];
    }

    for (let i = 0; i < garbage.length; i++) {
        // update the last seen index of 'G', 'P' and 'M' garbeges
        if (garbage[i].includes("G")) g = i - 1;
        if (garbage[i].includes("P")) p = i - 1;
        if (garbage[i].includes("M")) m = i - 1;
        res = res + garbage[i].length;
    }

    res += travel[g] ?? 0;
    res += travel[p] ?? 0;
    res += travel[m] ?? 0;
    return res;
};
