/*
        describe('Some simple subtraction', function() {
                it('simple', function() {
                        Test.assertEquals(subtract("2", "3"), "-1");
                        Test.assertEquals(subtract("30", "69"), "-39");
                        Test.assertEquals(subtract("6", "2"), "4");
                        Test.assertEquals(subtract("85", "11"), "74");
                });
        });

        describe('Some corner case', function() {
                it('corner cases', function() {
                        Test.assertEquals(subtract("2" ,"0"), "2");
                        Test.assertEquals(subtract("0", "30"), "-30");
                        Test.assertEquals(subtract("0000001", "3"), "-2");
                        Test.assertEquals(subtract("1009", "03"), "1006");
                        Test.assertEquals(subtract("234", "242"), "-8");
                        Test.assertEquals(subtract("294", "334"), "-40");
                });
        });

        describe('Some big subtraction', function() {
                it('big boys', function() {
                        Test.assertEquals(subtract("98765", "56894"), "41871");
                        Test.assertEquals(subtract("1020303004875647366210", "2774537626200857473632627613"), "-2774536605897852597985261403");
                        Test.assertEquals(subtract("58608473622772837728372827", "7586374672263726736374"), "58600887248100574001636453");
                        Test.assertEquals(subtract("9007199254740991", "9007199254740991"), "0");
                });
        });

*/

function subtract( num1, num2 ) {
        
        // REMOVE / TRUNCATE LEADING ZERIOS BY REGULAR EXPRESSIONSS
        num1 = num1.replace( /^0+/ , '' );
        num2 = num2.replace( /^0+/ , '' );
        
        let minus = '';
        if( num1.length < num2.length || ( num1.length == num2.length && num2 > num1 ) ) {
                minus = "-";
                [num2, num1] = [num1, num2];
        }
        
        let carry = difference = 0;
        let j = num2.length-1;
        let answer = '';
        let num1_digit = +num1[num1.length-1];
          
        for( let i = num1.length-1; i>=0; i-- ) {
                if( num1_digit < +num2[j] ) {
                        difference = String( num1_digit + 10 + carry - ( num2[j] ? +num2[j--] : 0 ) );
                        num1_digit = +num1[i-1] - 1;
                }
                else {
                        difference = String( num1_digit + carry - ( num2[j] ? +num2[j--] : 0 ) );
                        num1_digit = +num1[i-1];
                }
                answer = String( +difference[difference.length-1] ) + answer;
                difference.length > 1 ? carry = +difference[0] : carry = 0;
        }
          
        answer = answer.replace(/^0+/, '');

        return answer === '' ? '0' : minus + answer;
}