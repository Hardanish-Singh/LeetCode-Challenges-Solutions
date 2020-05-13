/*
    Given a string, find the length of the longest substring without repeating characters.

    Example 1:
                Input: "abcabcbb"
                Output: 3 
                Explanation: The answer is "abc", with the length of 3. 

    Example 2:
                Input: "bbbbb"
                Output: 1
                Explanation: The answer is "b", with the length of 1.

    Example 3:
                Input: "pwwkew"
                Output: 3
                Explanation: The answer is "wke", with the length of 3. 
                            Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthOfLongestSubstring = function(string) {
    if(string.length===0) return 0; // EMPTY STRING
    if(new Set(string.split("")).size === 1) return 1; // ALL ELEMENTS ARE SAME
    let longestSubstringLength = 1;
    for(let i=0; i<string.length; i++){
        if(string.length-i===longestSubstringLength) break;
        for(let j=i+1; j<string.length; j++){
            if((string[i] + string.substring(i+1, j+1)).length <= longestSubstringLength) continue;
            if(new Set((string[i] + string.substring(i+1, j+1)).split("")).size !== (string[i] + string.substring(i+1, j+1)).length) break;
            if((string[i] + string.substring(i+1, j+1)).length>longestSubstringLength) longestSubstringLength = (string[i] + string.substring(i+1, j+1)).length
        }
    }
    return longestSubstringLength;
};

/*
Efficiency
    Runtime: 304 ms, faster than 20.77% of JavaScript online submissions for Longest Substring Without Repeating Characters.
    Memory Usage: 41.9 MB, less than 23.89% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/