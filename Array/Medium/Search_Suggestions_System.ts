// Leetcode: https://leetcode.com/problems/search-suggestions-system/

// Solution 1
var suggestedProducts = (products: string[], searchWord: string): string[][] => {
    // LEXICOGRAPHICAL SORTING
    products.sort((a, b) => a.localeCompare(b));
    const suggestedProducts: string[][] = [];
    for (let i = 0; i < searchWord.length; i++) {
        const suggestions: string[] = [];
        for (let j = 0; j < products.length; j++) {
            if (suggestions.length === 3) break;
            if (products[j].startsWith(searchWord.slice(0, i + 1))) {
                suggestions.push(products[j]);
            }
        }
        suggestedProducts.push(suggestions);
    }
    return suggestedProducts;
};
