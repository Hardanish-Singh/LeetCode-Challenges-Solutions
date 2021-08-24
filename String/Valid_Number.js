/*
        A valid number can be split up into these components (in order):
                1) A decimal number or an integer.
                2) (Optional) An 'e' or 'E', followed by an integer.
        
        A decimal number can be split up into these components (in order):
                1) (Optional) A sign character (either '+' or '-').
                2) One of the following formats:
                        2a) One or more digits, followed by a dot '.'.
                        2b) One or more digits, followed by a dot '.', followed by one or more digits.
                        2c) A dot '.', followed by one or more digits.
        
        An integer can be split up into these components (in order):
                1)(Optional) A sign character (either '+' or '-').
                2) One or more digits.
        
        For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], 
        while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].
        Given a string s, return true if s is a valid number.
*/

/*
 * @param {string} s
 * @return {boolean}
*/

var isNumber = function( s ) {
        s = s.toLowerCase();
        if( s[s.length-1] === "+" ||  s[s.length-1] === "-" || s[s.length-1] === "e"  ) {
                return false;
        }
        let is_e_found = false;
        let is_dot_count = 0;
        let is_digit_found = false;
        let is_e_count = 0;
        for( let i=0; i<s.length; i++  ) {
                if( ( s[i] === "+" || s[i] === "-" )  && i > 0 && s[i-1] != 'e' ) {
                        return false;
                }
                if( s[i] === 'e' ) {
                        is_e_count++;
                        is_e_found = true;
                        if( !( Number(s[i-1]) >= 0 && Number(s[i-1]) <= 9 || s[i-1] === '.' ) 
                                || 
                            !( ( Number(s[i+1]) >= 0 && Number(s[i+1]) <= 9 ) || s[i+1] === '+' || s[i+1] === '-' )
                                ||
                            s[i-1] === "." && !( Number(s[i-2]) >= 0 && Number(s[i-2]) <= 9 )
                          ) {
                                return false;   
                        }
                }
                if( is_e_found && ( s[i] === '.' || is_e_count > 1 ) ) {
                        return false;    
                }
                if( (s[i] >= "a" && s[i] <= "z") && s[i] != 'e' ) {
                        return false;
                }
                if( s[i] === '.' ) {
                        is_dot_count++;
                        if( is_dot_count > 1 ) {
                                return false;
                        }
                }
                if( Number( s[i] ) >= 0 && Number( s[i] ) <= 9 ) {
                        is_digit_found = true;
                }
        }
        return is_digit_found ? true : false;
};