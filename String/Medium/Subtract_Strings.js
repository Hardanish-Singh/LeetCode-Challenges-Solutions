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