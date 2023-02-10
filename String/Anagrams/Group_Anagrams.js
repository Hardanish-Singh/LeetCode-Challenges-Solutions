// Leetcode: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
        let groupingAnagrams = {};

        for (let i = 0; i < strs.length; i++) {
                let sortedAnagram = strs[i].split("").sort().join("");

                if (!(sortedAnagram in groupingAnagrams)) {
                        groupingAnagrams[sortedAnagram] = [strs[i]];
                } else {
                        groupingAnagrams[sortedAnagram].push(strs[i]);
                }
        }

        return Object.values(groupingAnagrams);
};
