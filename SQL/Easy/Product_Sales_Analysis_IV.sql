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
                dense_rank() OVER ( partition by user_id order by data desc )  AS ranks
        FROM
        (
                
                SELECT
                        x.user_id,
                        x.product_id,
                        x.quantity * Product.price AS data
                FROM 
                (
                        SELECT
                                product_id,
                                user_id,
                                SUM(quantity) AS quantity
                        FROM
                                Sales
                        GROUP BY user_id, product_id
                ) AS x
                JOIN Product ON Product.product_id = x.product_id
                ORDER BY x.user_id, x.product_id

        ) AS xx

) AS xxx
WHERE xxx.ranks = 1;
        