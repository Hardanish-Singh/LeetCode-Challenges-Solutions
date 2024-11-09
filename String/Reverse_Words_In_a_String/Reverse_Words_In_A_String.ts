// Leetcode: https://leetcode.com/problems/reverse-words-in-a-string/

const reverseWords = (str: string): string =>
    str
        .trim()
        .split(/\s+/) // REGEX USED TO SPIT STRING AT SINGLE OR MULTIPLE SPACES
        .reverse()
        .join(" ");
