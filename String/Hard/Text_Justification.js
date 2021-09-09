function makeGreedyApproachSpaces(positions, c){
        let greedySpaces = new Array(positions).fill(0);;
        let I = 0;
        while( c > 0 ) {
                greedySpaces[I] = greedySpaces[I] + 1;
                I++;
                if( I == positions ) {
                        I = 0;
                }
                c--;
        }
        return greedySpaces;
}

var fullJustify = function( str, len ) {
        let word_count = 0;
        let temp = '';
        let initial = 0;
        let sc=0;
        let output = [];
        for( let i=0; i<str.length; i++ ) {
                for( let j=0; j<str[i].length; j++ ) {
                        word_count++;
                        if( word_count >= len ) {
                                let positions = 0;
                                let g;
                                if( j < str[i].length-1 ) {
                                        g = i;
                                } 
                                else {
                                        g = i+1;
                                }

                                for( let k = initial; k<g; k++ ) {
                                        sc += str[k].length;
                                        positions++;
                                }

                                if(positions > 1) {
                                        positions--;
                                }
                                
                                let arr = makeGreedyApproachSpaces(positions, len - sc);
                                
                                let CC = 0;
                                if( j < str[i].length-1 ) {
                                        for( let k = initial; k<=i-1; k++ ) {
                                                temp += str[k];
                                                if( arr[CC] ) for( let p=0; p<arr[CC]; p++ ) temp += " ";
                                                CC++;
                                        }
                                        initial = i;
                                        i = i-1;
                                }
                                else{
                                        for( let k = initial; k<=i; k++ ) {
                                                temp += str[k];
                                                if( arr[CC] ) for( let p=0; p<arr[CC]; p++ ) temp += " ";
                                                CC++;
                                        }
                                        initial = i+1;   
                                }
                                sc = 0;
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
                        sc=0;
                        let positions = 0;
                        for( let k = initial; k<=i; k++ ) {
                                sc += str[k].length;
                                positions++;
                        }
                        if(positions > 1) {
                                positions--;
                        }

                        let arr = makeGreedyApproachSpaces(positions, len - sc);
                        
                        let CC = 0;
                        for( let k = initial; k<=i; k++ ) {
                                temp += str[k];
                                if( arr[CC] ) for( let p=0; p<arr[CC]; p++ ) temp += " ";
                                CC++;
                        }
                        initial = i+1;
                        sc = 0;
                        output.push(temp);
                        temp = '';
                        word_count = 0;
                }
        }
        return output;
}