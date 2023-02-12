// Leetcode: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs: Array<string>): Array<Array<string>> {
        let groupingAnagrams: { [key: string]: Array<string> } = {};

        for (let i: number = 0; i < strs.length; i++) {
                let sortedAnagram: string = strs[i].split("").sort().join("");

                if (!(sortedAnagram in groupingAnagrams)) {
                        groupingAnagrams[sortedAnagram] = [strs[i]];
                } else {
                        groupingAnagrams[sortedAnagram].push(strs[i]);
                }
        }

        return Object.values(groupingAnagrams);
};
