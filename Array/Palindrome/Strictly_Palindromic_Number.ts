// Leetcode: https://leetcode.com/problems/strictly-palindromic-number/

const isStrictlyPalindromic = (n: number): boolean => {
    // Iterate through each base from 2 to n - 2 and check if the number n is palindromic in each base
    for (let i = 2; i <= n - 2; i++) {
        let comp = String(n.toString(i)).split("");
        if (comp.join("") !== comp.reverse().join("")) return false;
    }
    return true;
};
