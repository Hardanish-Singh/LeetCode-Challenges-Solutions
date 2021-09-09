function makeGreedyApproachSpaces(positions, c){
        let greedySpaces = new Array(positions).fill(0);;
        let I = 0;
        while( c-- > 0 ) {
                greedySpaces[I] = greedySpaces[I++] + 1;
                I === positions ? I = 0 : null; 
        }
        return greedySpaces;
}

function makeGreedyString(initial, g, arr, str){
        let CC = 0;
        let temp = '';
        for( let k = initial; k<g; k++ ) {
                temp += str[k];
                if( arr[CC] ) for( let p=0; p<arr[CC]; p++ ) temp += " ";
                CC++;
        }
        return temp;
}

var fullJustify = function( str, len ) {
        let word_count = 0;
        let temp = '';
        let initial = 0;
        let sc = positions = 0;
        let output = [];
        for( let i=0; i<str.length; i++ ) {
                for( let j=0; j<str[i].length; j++ ) {
                        word_count++;
                        if( word_count >= len ) {
                                let g;
                                if( j < str[i].length-1 ) {
                                        g = i--;
                                } 
                                else {
                                        g = i+1;
                                }

                                for( let k = initial; k<g; k++ ) {
                                        sc += str[k].length;
                                        positions++;
                                }

                                positions > 1 ? positions-- : null;
                                
                                let arr = makeGreedyApproachSpaces(positions, len - sc);
                                
                                let temp = makeGreedyString(initial, g, arr, str);
                                
                                initial = g;
                                sc = positions = 0;
                                output.push(temp);
                                temp = '';
                                word_count = -1;
                                break;
                        }
                }
                word_count++;
                if( i === str.length-1 && word_count > 0) {
                        sc = 0;
                        for( let k = initial; k<=str.length-1; k++ ) {
                                temp += str[k]+" ";
                        }
                        temp = temp.trim();
                        sc = temp.length;
                        let c = len - sc;
                        for( let k=0; k<c; k++ ) temp += " ";
                        output.push(temp);
                }
                else if(word_count===len ) {
                        for( let k = initial; k<=i; k++ ) {
                                sc += str[k].length;
                                positions++;
                        }
                        
                        positions > 1 ? positions-- : null;

                        let arr = makeGreedyApproachSpaces(positions, len - sc);
                        
                        let temp = makeGreedyString(initial, i+1, arr, str);

                        initial = i+1;
                        sc = positions = 0;
                        output.push(temp);
                        temp = '';
                        word_count = 0;
                }
        }
        return output;
}