// Leetcode: https://leetcode.com/problems/longest-valid-parentheses/

/**
 * @param { string } s
 * @return { number }
*/

var mergeIntervals = function( intervals ) {
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
        let brackets = [];

        for( let i = 0; i < s.length; i++ ) {
                if( s[i] === '(' ) {
                        stack.push( i ); 
                }
                else {
                        if( stack.length > 0 ) {
                                temp.push( [stack.pop(), i] );    
                        }
                }
        }
        
        // MERGE NESTED BRACKETS/INTERVALS & OVERLAPPING INTERVALS
        brackets = mergeIntervals(brackets);
        // CONSTRUCT CONSECUTIVE BRACKETS 
        for( let i = 0; i < brackets.length - 1; i++ ) {
                if( brackets[i + 1][0] - brackets[i][1] === 1 ) {
                        brackets[i + 1][0] = brackets[i][1];
                }
        }
        // MERGE OVERLAPPING INTERVALS
        brackets = mergeIntervals(brackets);
        if( brackets.length == 0 ) {
                return 0;
        }
        
        let result = [];
        for( let i = 0; i < brackets.length; i++ ) {
                result.push( brackets[i][1] - brackets[i][0] + 1 );
        }
        return Math.max.apply( null, result );
};