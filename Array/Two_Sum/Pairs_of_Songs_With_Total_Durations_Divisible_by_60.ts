// Leetcode: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

/*
        SOLUTION 1: BRUTE FORCE
                Time Complexity: O( n ^ 2 )
                Space Complexity: O( 1 )
*/

var numPairsDivisibleBy60 = (time: number[]): number => {
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

var numPairsDivisibleBy60 = (times: number[]): number => {
    const numbers = [
        60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840,
        900, 960,
    ];
    let count = 0;
    let map = new Map<number, number>();

    for (const time of times) {
        for (const number of numbers) {
            let compliment = number - time;
            if (map.get(compliment)) {
                count += map.get(compliment) as number;
            }
        }
        map.set(time, (map.get(time) ?? 0) + 1);
    }

    return count;
};
