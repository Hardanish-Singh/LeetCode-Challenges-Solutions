// Leetcode: https://leetcode.com/problems/isomorphic-strings/

const helper = (string1: string, string2: string): boolean => {
    let map = new Map();
    for (let i = 0; i < string1.length; i++) {
        if (map.has(string1[i]) && map.get(string1[i]) != string2[i]) {
            return false;
        } else {
            map.set(string1[i], string2[i]);
        }
    }
    return true;
};

var isIsomorphic = (s: string, t: string): boolean => {
    if (s.length != t.length) {
        return false;
    }
    return helper(s, t) && helper(t, s);
};
