// Leetcode: https://leetcode.com/problems/find-all-anagrams-in-a-string/

var isAnagram = function (s, t) {
        if (s.length !== t.length) {
                return false;
        }
        var dictionaryOne = {};
        var dictionaryTwo = {};

        for (let i = 0; i < s.length; i++) {
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

var findAnagrams = function (s, pp) {
        let res = [];
        for (let i = 0; i < s.length; i++) {
                let substr = s.slice(i, p.length + i);
                if (isAnagram(substr, p)) {
                        res.push(i);
                }
        }
        return res;
};
