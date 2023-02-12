// Leetcode: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

var removeAnagrams = function (words: Array<string>): Array<string> {
        for (let i: number = 1; i < words.length; i++) {
                const firstWord: string = words[i - 1];
                const secondWord: string = words[i];
                if (isAnagram(firstWord, secondWord)) {
                        words.splice(i, 1);
                        i--;
                }
        }

        return words;
};

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
