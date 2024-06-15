// Leetcode: https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

const appendCharacters = (source: string, target: string): number => {
    let index = -1;
    let count = 0;
    for (const t of target) {
        index = source.indexOf(t, index + 1);
        if (index == -1) {
            break;
        }
        count++;
    }
    return target.length - count;
};
