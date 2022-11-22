// Leetcode: https://leetcode.com/problems/string-compression/

/**
 *
 * @param { string[] } chars
 * @returns { number }
 */

function compress(chars: Array<string>): number {
        chars.push("π");
        let i = 0;

        while (chars[i] != "π") {
                let j = i;
                let count = 1;
                while (chars[j] == chars[j + 1]) {
                        count++;
                        j++;
                }
                chars.push(chars[i]);
                count > 1 && chars.push(...String(count).split(""));
                i = j + 1;
        }
        let index = chars.indexOf("π");
        for (let i = index; i >= 0; i--) {
                chars.splice(i, 1);
        }
        return chars.length;
}
