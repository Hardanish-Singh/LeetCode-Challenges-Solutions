/*
        You are given a positive integer num consisting of exactly four digits. 
        Split num into two new integers new1 and new2 by using the digits found in num. 
        Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

        For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. 
        Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].

        Return the minimum possible sum of new1 and new2.

        Example 1:
                Input: num = 2932
                Output: 52
                Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
                             The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
        
        
        Example 2:
                Input: num = 4009
                Output: 13
                Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
                             The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
*/

/*
 * @param {number} num
 * @return {number}
*/

var minimumSum = function( num ) {
        // SPLIT & SORT THE NUMBER IN ASCENDING ORDER
        num = String(num).split("").sort( (a,b) => a-b );
        /*
                NOW WE CONSTRUCT TWO NUMBERS ( num1, num2 )
                        1) FOR num1, WE PICK FIRST MINIMUM ELEMENT FROM SORTED ARRAY
                        2) FOR num2, WE PICK SECOND MINIMUM ELEMENT FROM SORTED ARRAY
                        Remaining Two Array Elements can we conbined in any order with num1 & num2
        */
        let num1 = Number( num[0] + num[2] );
        let num2 = Number( num[1] + num[3] );
        return num1 + num2;
};