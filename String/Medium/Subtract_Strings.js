function subtract( num1, num2 ) {
        if(num1 === num2) {
                return "0";
        }

        num1 = num1.replace(/^0+/, '');
        num2 = num2.replace(/^0+/, '');
  
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
                        if( +num1[i] === +num2[i] ) {
                                continue;
                        }
                        else if( +num1[i] > +num2[i] ) {
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
                        answer = String( +difference[difference.length-1] ) + answer;
                        difference.length > 1 ? carry = +difference[0] : carry = 0;
                        flag = +num1[i-1] - 1;
                }
                else {
                        difference = String( flag + carry - ( num2[j] ? +num2[j--] : 0 ) );
                        answer = String( +difference[difference.length-1] ) + answer;
                        difference.length > 1 ? carry = +difference[0] : carry = 0;
                        flag = +num1[i-1];
                }
          }
          
        if(answer.startsWith("0") && answer.length>1) {
                answer = answer.replace(/^0+/, '');
        }
        
        return a + answer;
}
// console.log(subtract("2", "3"), "-1");
//     console.log(subtract("30", "69"), "-39");
//     console.log(subtract("6", "2"), "4");
//     console.log(subtract("85", "11"), "74");

// console.log(subtract("2" ,"0"), "2");
//     console.log(subtract("0", "30"), "-30");
//     console.log(subtract("0000001", "3"), "-2");
//     console.log(subtract("1009", "03"), "1006");
//     console.log(subtract("234", "242"), "-8");
//     console.log(subtract("294", "334"), "-40");

//     console.log(subtract("98765", "56894"), "41871");
//     console.log(subtract("1020303004875647366210", "2774537626200857473632627613"), "-2774536605897852597985261403");
//     console.log(subtract("58608473622772837728372827", "7586374672263726736374"), "58600887248100574001636453");
//     console.log(subtract("9007199254740991", "9007199254740991"), "0");

// console.log( subtract("111111111111111110", "111111111111111111"), +"111111111111111110", Number("111111111111111111") );