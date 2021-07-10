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
/**
 * @param { string } s
 * @return { boolean }
 */
var isValid = function( s )
{

        let openingBrackets = [];

        for( let i=0; i<s.length; i++ )
        {
                if( s[i] === '(' || s[i] === '{' || s[i] === '[' )
                {
                        openingBrackets.push( s[i] );
                }
                else
                {
                        if( s[i] === ')' )
                        {
                                if( !(openingBrackets[openingBrackets.length-1] == '(') )
                                {
                                      return false;
                                }
                                else
                                {
                                    openingBrackets.pop();
                                }
                        }
                        else if( s[i] === '}' )
                        {
                                if( !(openingBrackets[openingBrackets.length-1] == '{') )
                                {
                                      return false;
                                }
                                else
                                {
                                    openingBrackets.pop();
                                }
                        }
                        else if( s[i] === ']' )
                        {
                                if( !(openingBrackets[openingBrackets.length-1] == '[') )
                                {
                                      return false;
                                }
                                else
                                {
                                    openingBrackets.pop();
                                }
                        }
                }
        }

        return openingBrackets.length > 0 ? false : true;
};
