-- Leetcode: https://leetcode.com/problems/product-sales-analysis-iv/

SELECT 
        user_id,
        product_id
FROM 
(
        SELECT
                user_id,
                product_id,
                data,
                dense_rank() OVER ( partition by user_id order by data desc ) AS ranks
        FROM
        (    
                SELECT
                        Subquery1.user_id,
                        Subquery1.product_id,
                        Subquery1.quantity * Product.price AS data
                FROM 
                (
                        SELECT
                                product_id,
                                user_id,
                                SUM(quantity) AS quantity
                        FROM
                                Sales
                        GROUP BY user_id, product_id
                ) AS Subquery1
                JOIN Product ON Product.product_id = Subquery1.product_id
                ORDER BY Subquery1.user_id, Subquery1.product_id
        ) AS Subquery2
) AS Subquery3
WHERE Subquery3.ranks = 1;