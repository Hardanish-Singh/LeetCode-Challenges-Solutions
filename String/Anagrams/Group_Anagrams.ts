// Leetcode: https://leetcode.com/problems/group-anagrams/

type GroupedAnagrams = {
    [key: string]: Array<string>;
};

const groupAnagrams = (strs: Array<string>): Array<Array<string>> => {
    let groupedAnagrams: GroupedAnagrams = {};

    for (let i: number = 0; i < strs.length; i++) {
        let sortedAnagram: string = strs[i].split("").sort().join("");
        sortedAnagram in groupedAnagrams
            ? groupedAnagrams[sortedAnagram].push(strs[i])
            : (groupedAnagrams[sortedAnagram] = [strs[i]]);
    }

    return Object.values(groupedAnagrams);
};
