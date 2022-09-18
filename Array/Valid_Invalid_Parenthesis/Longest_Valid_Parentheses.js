// Leetcode: https://leetcode.com/problems/longest-valid-parentheses/

/**
 * @param { string } s
 * @return { number }
*/

var merge = function( intervals ) {
        intervals.sort( (a,b) => a[0] - b[0] );
        for( let i = 0; i < intervals.length - 1; i++ ) {
                let j = i + 1;
                if( 
                        intervals[j][0] >= intervals[i][0] 
                                && 
                        intervals[j][0] <= intervals[i][1] 
                ) {
                        intervals[i] = [ intervals[i][0], Math.max( intervals[i][1], intervals[j][1] ) ];
                        intervals.splice(j, 1);
                        i--;
                }
        }
        return intervals;
};

var longestValidParentheses = function( s ) {

        let stack = [];
        let temp = [];

       for( let i = 0; i < s.length; i++ ) {
                if( s[i] === '(' ) {
                        stack.push( i ); 
                }
                else {
                        let item = stack.pop();
                        if( item != null ) {
                                temp.push( [item, i] );
                        }
                }
        }
        
        // MERGE NESTED BRACKETS
        temp = merge(temp);
        // MAKE CONSECUTIVE BRACKETS SAME 
        for( let i = 0; i < temp.length - 1; i++ ) {
                if( temp[i + 1][0] - temp[i][1] === 1 ) {
                        temp[i + 1][0] = temp[i][1];
                }
        }
        // MERGE CONSECUTIVE BRACKTES
        temp = merge(temp);
        if( temp.length == 0 ) {
                return 0;
        }
        
        let result = [];
        for( let i = 0; i < temp.length; i++ ) {
                result.push( ( temp[i][1] - temp[i][0] ) + 1 );
        }
        return Math.max.apply( null, result );
};