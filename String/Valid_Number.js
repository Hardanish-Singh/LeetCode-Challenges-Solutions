/*
 * @param {string} s
 * @return {boolean}
*/
var isNumber = function( s ) {
        s = s.toLowerCase();
        let is_e_found = false;
        let is_dot_count = 0;
        let is_digit_found = false;
        let is_e_count = 0;
        if( s[s.length-1] === "+" ||  s[s.length-1] === "-"   ) {
                return false;
        }
        for( let i=0; i<s.length; i++  ) {
                if( ( s[i] === '+' && s[i+1] === '+' ) || ( s[i] === '+' && s[i+1] === '-' ) || ( s[i] === '-' && s[i+1] === '+' ) || ( s[i] === '-' && s[i+1] === '-' ) ) {
                        return false;
                }
                if( s[i] === "+" && i > 0 && s[i-1] != 'e' ) {
                        return false;
                }
                if( s[i] === "-" && i > 0 && s[i-1] != 'e' ) {
                        return false;
                }
                if( s[i] === 'e' ) {
                        is_e_count++;
                        is_e_found = true;
                        if( !( Number(s[i-1]) >= 0 && Number(s[i-1]) <= 9 || s[i-1] === '.' )  ) {
                                return false;   
                        }
                        if( !( ( Number(s[i+1]) >= 0 && Number(s[i+1]) <= 9 ) || s[i+1] === '+' || s[i+1] === '-' )  ) {
                                return false;   
                        }
                        if( s[i-1] === "." && !( Number( s[i-2] >= 0 ) && Number( s[i-2] <= 9 ) ) ) {
                                return false;
                        }
                }
                if( is_e_found ) {
                        if( s[i] === '.' ) {
                                return false;
                        }
                }
                if( is_e_count > 1 ) {
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
                        if( s[i-1] === '.' ) {
                                return false;
                        }
                        if( s[i+1] === '.' ) {
                                return false;
                        }
                        if( i === s.length-1 && s.length === 1 ) {
                                return false;
                        }
                }
                if( Number( s[i] ) >= 0 && Number( s[i] ) <= 9 ) {
                        is_digit_found = true;
                }
        }
        if( is_digit_found === false ) {
                return false;
        }
        return true;
};