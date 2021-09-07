function subtract( num1, num2 ) {
        if( num1 === num2 ) {
                return "0";
        }

        // REMOVE / TRUNCATE LEADING ZERIOS BY REHULAR EXPRESSIONSS
        num1 = num1.replace( /^0+/ , '' );
        num2 = num2.replace( /^0+/ , '' );
  
        let a = '';
        let temp;
        if( num2.length > num1.length ) {
                a = "-";
                temp = num2;
                num2 = num1;
                num1 = temp;
        }
          
        if( !( num1.length > num2.length ) ) {
                for( let i=0; i<num1.length; i++ ){
                        if( +num1[i] > +num2[i] ) {
                                break;
                        }
                        else if( +num2[i] > +num1[i] ){
                                a = "-";
                                temp = num2;
                                num2 = num1;
                                num1 = temp;
                                break;
                        }
                }
          }
        
        let carry = difference = 0;
        let j = num2.length-1;
        let answer = '';
        let flag = +num1[num1.length-1];
          
        for( let i = num1.length-1; i>=0; i-- ) {
                if( flag < +num2[j] ) {
                        difference = String( flag + 10 + carry - ( num2[j] ? +num2[j--] : 0 ) );
                        flag = +num1[i-1] - 1;
                }
                else {
                        difference = String( flag + carry - ( num2[j] ? +num2[j--] : 0 ) );
                        flag = +num1[i-1];
                }
                answer = String( +difference[difference.length-1] ) + answer;
                difference.length > 1 ? carry = +difference[0] : carry = 0;
          }
          
        if( answer.startsWith("0") && answer.length>1 ) {
                answer = answer.replace(/^0+/, '');
        }
        
        return a + answer;
}