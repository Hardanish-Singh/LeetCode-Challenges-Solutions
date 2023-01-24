-- Leetcode: https://leetcode.com/problems/sales-analysis-ii/

SELECT
        DISTINCT buyer_id
FROM sales 
JOIN product ON product.product_id = sales.product_id
WHERE product_name = 'S8' 
AND buyer_id NOT IN ( 
                        SELECT 
                                DISTINCT buyer_id
                        FROM sales 
                        JOIN product ON product.product_id = sales.product_id
                        WHERE product_name = 'iPhone'
);