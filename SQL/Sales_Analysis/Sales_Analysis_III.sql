-- Leetcode: https://leetcode.com/problems/sales-analysis-iii/

SELECT
        product.product_id, 
        product.product_name
FROM
        product
JOIN sales ON product.product_id = sales.product_id
GROUP BY product.product_id
HAVING MIN(sales.sale_date) >='2019-01-01' AND MAX(sales.sale_date) <= '2019-03-31';