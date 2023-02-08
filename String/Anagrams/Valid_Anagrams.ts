// Leetcode: https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s: string, t: string): boolean {
        if (s.length !== t.length) {
                return false;
        }
        var dictionaryOne: { [key: string]: number } = {};
        var dictionaryTwo: { [key: string]: number } = {};

        for (let i: number = 0; i < s.length; i++) {
                dictionaryOne[s[i]] ? (dictionaryOne[s[i]] += 1) : (dictionaryOne[s[i]] = 1);
                dictionaryTwo[t[i]] ? (dictionaryTwo[t[i]] += 1) : (dictionaryTwo[t[i]] = 1);
        }

        for (const [key, value] of Object.entries(dictionaryOne)) {
                if (dictionaryTwo[key] !== value) {
                        return false;
                }
        }

        return true;
};
