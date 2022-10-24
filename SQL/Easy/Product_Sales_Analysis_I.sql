-- Leetcode: https://leetcode.com/problems/product-sales-analysis-i/

SELECT
        Product.product_name,
        Sales.year,
        Sales.price
FROM
        Product 
JOIN Sales ON Sales.product_id = Product.product_id;