/*
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    1) Open brackets must be closed by the same type of brackets.
    2) Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:
        Input: "()"
        Output: true
    
    Example 2:
        Input: "()[]{}"
        Output: true
    
    Example 3:
        Input: "(]"
        Output: false
    
    Example 4:
        Input: "([)]"
        Output: false
    
    Example 5:
        Input: "{[]}"
        Output: true
*/
var isValid = function(string) {
    let splittedString = string.split("");
    for(let i=0; i<splittedString.length; i++){
        if(i>=splittedString.length/2) return false;
        if(splittedString[i] === '[' && splittedString[i+1] === ']' || splittedString[i] === '{' && splittedString[i+1] === '}' || splittedString[i] === '(' && splittedString[i+1] === ')') {
            splittedString.splice(i, 2);
             i = -1;
        }
    }
    if(splittedString.length === 0) return true;
    else return false;
};