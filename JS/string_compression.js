var compress = function(chars) {
    if(chars.length === 1) {
       return 1;
    }
    let charCount = 1;
    let indexes = [];
    for( let i=0; i<chars.length; i++ ){
        charCount = 1;
        if(indexes.includes(i)) {
                continue;
        }
        for( let j=i+1; j<chars.length; j++ ){
            if( chars[i] === chars[j] ) {
                charCount++;
            }
            else {
                break;
            }
        }
        if( charCount === 1 ) {
            continue;
        }
        let index = -1;
        if( charCount > 9 ) {
            for( let k=i; k<chars.length; k++ ){
                if( chars[k] != chars[k+1]) {
                    index = k+1;
                    break;
                }
            }
            let d = Math.abs((i+1) - (index-1)) + 1;
            if(d==0) {
                d = 1;
            }
            chars.splice(i+1, d);
            index = i+1;
            for( let k=0; k<String(charCount).length; k++ ) {
                    chars.splice(index, 0, String(charCount)[k]);
                indexes.push(index);
                index++;
            }
        } 
        else {
            for( let k=i; k<chars.length; k++ ){
                if( chars[k] != chars[k+1]) {
                    index = k+1;
                    break;
                }
            }
            let d = Math.abs((i+1) - (index-1)) + 1;
            if(d==0) {
                d = 1;
            }
            chars.splice(i+1, d);
            index = i+1;
            chars.splice(index, 0, String(charCount));
            indexes.push(index);
        }
    }
    return chars.length;
};
