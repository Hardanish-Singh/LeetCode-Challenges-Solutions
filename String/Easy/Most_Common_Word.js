/*
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
*/
var mostCommonWord = function( paragraph, banned ) {
        paragraph = paragraph.toLowerCase();
        let new_paragraph = [];
        let temp = "";
        
        for( let i=0; i<paragraph.length; i++ ) {
                if( paragraph[i] >= 'a' && paragraph[i] <= 'z' ) {
                        temp += paragraph[i];
                        if( i === paragraph.length-1 ) {
                                new_paragraph.push(temp);
                        }
                }
                else {
                        if( temp.length > 0 ) {
                                new_paragraph.push(temp);
                        }
                        temp = '';
                }
        }
        
        let new_count = 1;
        let max = 0;
        let old_count = 0;
        let isBackward = false;
        for( let i=0; i<new_paragraph.length; i++ ) {
                if( banned.includes( new_paragraph[i] ) ) {
                        continue;
                }
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
                for( let j=i+1; j<new_paragraph.length; j++ ) {
                        if( new_paragraph[j] == new_paragraph[i] ) {
                                new_count++;
                        }
                }
                if( new_count >= old_count ) {
                        old_count = new_count;
                        max = i;
                }
                new_count = 1;
        }
        return new_paragraph[max];
};
