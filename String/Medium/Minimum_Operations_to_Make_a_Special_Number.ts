// Leetcode: https://leetcode.com/problems/minimum-operations-to-make-a-special-number/

/*
    Idea: A number is divisible by 25 if and only if the LAST TWO DIGITS of the number are either 00, 25, 50, or 75
    So our goal is to find the pairs [00, 25, 50, 75] in the input string from end of the string to the beginning.
*/

const minimumOperations = (n: string): number => {
    let min: number = Number.MAX_VALUE;

    for (let i: number = n.length - 1; i >= 0; i--) {
        const current: string = n[i];
        if (current === "5" || current === "0") {
            for (let j: number = i - 1; j >= 0; j--) {
                const previous: string = n[j];
                if (
                    (current === "5" && (previous === "2" || previous === "7")) ||
                    (current === "0" && (previous === "0" || previous === "5"))
                ) {
                    let variableFirst: number = i - j - 1; // Calculate the number of characters between i and j exclusive.
                    let variableLast: number = n.length - 1 - i; // Calculate the number of characters from end of the string to i.
                    let minOperationsRequired = variableFirst + variableLast; // minimum operations required to make the string special by deleting characters
                    min = Math.min(minOperationsRequired, min);
                }
            }
        }
    }

    if (min === Number.MAX_VALUE) {
        return n.includes("0") ? n.length - 1 : n.length;
    } else {
        return min;
    }
};
