/*
        Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
        The words in paragraph are case-insensitive and the answer should be returned in lowercase.

        Example 1:
                Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
                Output: "ball"
                Explanation: 
                        "hit" occurs 3 times, but it is a banned word.
                        "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
                        Note that words in the paragraph are not case sensitive, that punctuation is ignored (even if adjacent to words, such as "ball,"),  and that "hit" isn't the answer even though it occurs more because it is banned.
        Example 2:
                Input: paragraph = "a.", banned = []
                Output: "a"
 

        Constraints:
                1) 1 <= paragraph.length <= 1000
                2) paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
                3) 0 <= banned.length <= 100
                4) 1 <= banned[i].length <= 10
                5) banned[i] consists of only lowercase English letters.
*/
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