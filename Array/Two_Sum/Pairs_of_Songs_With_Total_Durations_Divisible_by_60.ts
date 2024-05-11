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

/*
    SOLUTION 2: USING MAP
        Time Complexity: O( n ^ 2 )
        Space Complexity: O( n )
*/

var numPairsDivisibleBy60 = (times: number[]): number => {
    /* 
        Because the maximum value in the array is only 500, the maximum value of the sum of the two numbers is only 1000. 
        So we create an array that stores all integers that can be divided by 60 and less than 1000
    */
    const numbers: number[] = [];
    for (let i = 60; i <= 1000; i += 60) numbers.push(i);

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

/*
    SOLUTION 3: USING MAP
        Time Complexity: O( n )
        Space Complexity: O( n )
*/

var numPairsDivisibleBy60 = (times: number[]): number => {
    let count = 0;
    let map = new Map<number, number>();
    // Convert all times to the remainder of 60
    for (let i = 0; i < times.length; i++) times[i] = times[i] % 60;

    for (const time of times) {
        let compliment = (60 - time) % 60;
        count += map.get(compliment) ?? 0;
        map.set(time, (map.get(time) ?? 0) + 1);
    }

    return count;
};
