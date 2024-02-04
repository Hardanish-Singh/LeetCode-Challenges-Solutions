// Leetcode: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

/*
        SOLUTION 1: BRUTE FORCE
                Time Complexity: O( n ^ 2 )
                Space Complexity: O( 1 )
*/

const numPairsDivisibleBy60 = (time: number[]): number => {
    let count: number = 0;
    for (let i: number = 0; i < time.length; i++) {
        for (let j: number = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                count++;
            }
        }
    }
    return count;
};
