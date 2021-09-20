/*
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
*/

//paragraph consists of English letters, space ' ', or one of the symbols: " ! ? ' , ; . "
var mostCommonWord = function( paragraph, banned ) {
        paragraph = paragraph.toLowerCase();
        let new_paragraph = [];
        let temp = "";
        for( let i=0; i<paragraph.length; i++ ){
                if( paragraph[i] >= 'a' && paragraph[i] <= 'z' ) {
                        temp += paragraph[i];
                }
                else {
                        if( temp.length > 0 ) {
                                new_paragraph.push(temp);
                        }
                        temp = '';
                }
        }
        if( temp.length > 0 ) {
                new_paragraph.push(temp);
        }
        
        let count = 1;
        let max = 0;
        let t = 0;
        let isBackward = false;
        for( let i=0; i<new_paragraph.length; i++ ) {
                isBackward = false;
                for( let b=0; b<i; b++ ) {
                        if( new_paragraph[i] === new_paragraph[b] ) {
                                isBackward = true;
                                break;
                        }
                }
                if( isBackward ) {
                        continue;
                } 
                if( banned.includes( new_paragraph[i] ) || new_paragraph[i] == "" ) {
                        continue;
                }
                else {
                        for( let j=i+1; j<new_paragraph.length; j++ ) {
                                if( new_paragraph[j] == new_paragraph[i] ) {
                                        count++;
                                }
                        }
                        if( count >= t ) {
                                t = count;
                                max = i;
                        }
                        count = 1;
                }
        }
        return new_paragraph[max];
};
