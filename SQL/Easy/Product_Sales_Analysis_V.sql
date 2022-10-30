-- Leetcode: https://leetcode.com/problems/product-sales-analysis-v/

SELECT 
        user_id,
        SUM(quantity * price) AS spending
FROM Sales s

JOIN Product p ON s.product_id = p.product_id

GROUP BY user_id
ORDER BY spending DESC