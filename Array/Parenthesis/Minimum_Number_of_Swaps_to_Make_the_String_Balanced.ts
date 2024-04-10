// Leetcode: https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

const minSwaps = (str: string): number => {
    let stack: Array<string> = [];
    for (let i: number = 0; i < str.length; i++) {
        let bracket: string = str[i];
        if (bracket === "[") {
            stack.push(bracket);
        } else {
            if (stack[stack.length - 1] === "[") {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        }
    }

    let length = stack.length / 2; // Because the string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.
    /*
        If even number of pairs: Simplying using integer division by 2 returns the the number of switches needed to matched the unmatched pair.
        If odd numbers of pairs: Even after switching the half of the unmatched pairs, you will be left with one pair which needs an additional swapping. 
        Hence, you either add + 1 or use a ceiling function to round the number up.
    */
    return length % 2 === 0 ? length / 2 : Math.ceil(length / 2);
    // return length % 2 === 0 ? length / 2 : Math.floor(length / 2) + 1;
};
