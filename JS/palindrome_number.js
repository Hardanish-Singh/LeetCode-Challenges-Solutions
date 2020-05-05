/*
    Determine whether an integer is a palindrome. 
    An integer is a palindrome when it reads the same backward as forward.

    Example 1:
                Input: 121
                Output: true
    Example 2:
                Input: -121
                Output: false
                Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    
    Example 3:
                Input: 10
                Output: false
                Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
var isPalindrome = function(x) {
    let string = x.toString();
    let palindrome = true;
    let leftPosition = 0;
    let rightPosition = string.length-1;

    while(leftPosition !== rightPosition) {
        if(string[leftPosition] !== string[rightPosition]) {
            palindrome = false;
            break;
        }
        if(string[leftPosition] === string[rightPosition]) {
            leftPosition++;
            rightPosition--;
        }
        if(leftPosition > rightPosition) break;
    }
    return palindrome;
};

/*
SOLUTION EFFICIENCY
    RUNTIME: 160 ms, faster than 99.18% of JavaScript online submissions for Palindrome Number.
    MEMORY USAGE: 45.8 MB, less than 35.34% of JavaScript online submissions for Palindrome Number.
*/