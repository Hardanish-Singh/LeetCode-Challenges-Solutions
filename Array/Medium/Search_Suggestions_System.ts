// Leetcode: https://leetcode.com/problems/search-suggestions-system/

// Solution 1
var suggestedProducts = (products: string[], searchWord: string): string[][] => {
    // LEXICOGRAPHICAL SORTING
    products.sort((a, b) => a.localeCompare(b));
    let suggested_products: string[][] = [];
    for (let i = 0; i < searchWord.length; i++) {
        let temp: string[] = [];
        for (let j = 0; j < products.length; j++) {
            if (temp.length === 3) break;
            if (products[j].startsWith(searchWord.slice(0, i + 1))) {
                temp.push(products[j]);
            }
        }
        suggested_products.push(temp);
    }
    return suggested_products;
};
