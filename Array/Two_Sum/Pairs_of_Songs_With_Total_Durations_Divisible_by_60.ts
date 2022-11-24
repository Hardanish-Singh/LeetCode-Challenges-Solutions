// Leetcode: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

function numPairsDivisibleBy60(time: number[]): number {
        let count: number = 0;
        for (let i: number = 0; i < time.length; i++) {
                for (let j: number = i + 1; j < time.length; j++) {
                        if ((time[i] + time[j]) % 60 === 0) {
                                count++;
                        }
                }
        }
        return count;
}
