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
    if(string.length===0) return 0;
    let longestSubstringLength = 1;
    for(let i=0; i<string.length; i++){
        for(let j=i+1; j<string.length; j++){
            if(new Set((string[i] + string.substring(i+1, j+1)).split("")).size != (string[i] + string.substring(i+1, j+1)).split("").length) break;
            if((string[i] + string.substring(i+1, j+1)).split("").length>longestSubstringLength) {
                longestSubstringLength = (string[i] + string.substring(i+1, j+1)).split("").length;
            }
        }
    }
    return longestSubstringLength;
};

