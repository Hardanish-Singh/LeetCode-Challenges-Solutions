const phoneNumberLetterCombinations = {
     '2' : ['a', 'b', 'c'],
     '3' : ['d', 'e', 'f'],
     '4' : ['g', 'h', 'i'],
     '5' : ['j', 'k', 'l'],
     '6' : ['m', 'n', 'o'],
     '7' : ['p', 'q', 'r', 's'],
     '8' : ['t', 'u', 'v'],
     '9' : ['w', 'x', 'y', 'z']
};

/**
 * @param { string } digits
 * @return { string[] }
*/

var letterCombinations = function( digits ) {
        if( digits.length < 1 ) {
                return [];
        }
        else {
                let letterCombinationsOfPhoneNumber = [];
                for( let i=0; i<digits.length; i++ ) {
                        letterCombinationsOfPhoneNumber = makeLetterCombinations(letterCombinationsOfPhoneNumber, phoneNumberLetterCombinations[digits[i]]);
                }
                return letterCombinationsOfPhoneNumber;
        }
};

function makeLetterCombinations( value1, value2 ) {
        let temp = [];
        if(value1.length === 0) {
                return value2;
        }
        else {
                for( let i=0; i<value1.length; i++ ) {
                        for( let j=0; j<value2.length; j++ ) {
                                temp.push(value1[i]+value2[j]);
                        }
                }
        }
        return temp;
}