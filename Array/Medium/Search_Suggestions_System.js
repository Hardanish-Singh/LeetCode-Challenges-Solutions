/*
        Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. 
        Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

        Return list of lists of the suggested products after each character of searchWord is typed. 

        Example 1:
                Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
                Output: [
                                ["mobile","moneypot","monitor"],
                                ["mobile","moneypot","monitor"],
                                ["mouse","mousepad"],
                                ["mouse","mousepad"],
                                ["mouse","mousepad"]
                        ]
                Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
                After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
                After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
        
        Example 2:

                Input: products = ["havana"], searchWord = "havana"
                Output: [
                                ["havana"],
                                ["havana"],
                                ["havana"],
                                ["havana"],
                                ["havana"],
                                ["havana"]
                        ]
        
        Example 3:

                Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
                Output: [
                                ["baggage","bags","banner"],
                                ["baggage","bags","banner"],
                                ["baggage","bags"],
                                ["bags"]
                        ]
        
        Example 4:

                Input: products = ["havana"], searchWord = "tatiana"
                Output: [
                                [],
                                [],
                                [],
                                [],
                                [],
                                [],
                                []
                        ]

        Constraints:

                1) 1 <= products.length <= 1000
                2) There are no repeated elements in products.
                3) 1 <= Σ products[i].length <= 2 * 10^4
                4) All characters of products[i] are lower-case English letters.
                5) 1 <= searchWord.length <= 1000
                6) All characters of searchWord are lower-case English letters.
*/

/*
 * @param { string[] } products
 * @param { string } searchWord
 * @return { string[][] }
*/

/*
        SOLUTION 1: USING LINEAR SEARCH
*/
var suggestedProducts = function( products, searchWord ) {
        // LEXICOGRAPHICAL SORTING
        products.sort( (a, b) => a.localeCompare(b) );
        let suggested_products = [];
        for( let i=0; i<searchWord.length; i++ ) {
                let count = 0;
                let temp = [];
                for( let j=0; j<products.length; j++ ) {
                        if( count >= 3 ) {
                                break;
                        }
                        if( products[j].startsWith( searchWord.slice(0, i+1) ) && count < 3 ) {
                                temp.push( products[j] );
                                count++;
                        }
                }
                if( temp.length === 0 ) {
                        for( let k=i; k<searchWord.length; k++ ) {
                                suggested_products.push(temp);
                        }
                        break;
                }
                suggested_products.push(temp);
        }
        return suggested_products;
};