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

// Solution 2
var suggestedProducts = (products: string[], searchWord: string): string[][] =>
    searchWord.split("").reduce((suggestedProducts: string[][], _, index: number) => {
        const suggestions = products
            .sort((a, b) => a.localeCompare(b))
            .filter((product) => product.startsWith(searchWord.slice(0, index + 1)))
            .slice(0, 3);
        suggestedProducts.push(suggestions);
        return suggestedProducts;
    }, []);
