// Leetcode: https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param { string } str
 * @return { string }
*/

function reverseWords( str: string ): string {
        return str.trim()
                  .split(/\s+/) // REGEX USED TO SPIT STRING AT SINGLE OR MULTIPLE SPACES
                  .reverse()
                  .join(" ");
};