// Leetcode: https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

var garbageCollection = (garbage: string[], travel: number[]): number => {
    let g = -1;
    let m = -1;
    let p = -1;
    let time = 0;

    // Prefix sum of travel time
    for (let i = 0; i < travel.length; i++) {
        travel[i] += travel[i - 1] || 0;
    }

    for (let i = 0; i < garbage.length; i++) {
        // update the last seen index of 'G', 'P' and 'M' garbeges
        if (garbage[i].includes("G")) g = i - 1;
        if (garbage[i].includes("P")) p = i - 1;
        if (garbage[i].includes("M")) m = i - 1;
        time = time + garbage[i].length;
    }

    time += travel[g] ?? 0;
    time += travel[p] ?? 0;
    time += travel[m] ?? 0;

    return time;
};
