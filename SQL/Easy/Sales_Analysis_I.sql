-- Leetcode: https://leetcode.com/problems/sales-analysis-i/

-- SOLUTION 1
SELECT 
        s.seller_id
FROM 
(
        SELECT 
                MAX( price ) AS p
        FROM 
        (
                SELECT
                        seller_id,
                        SUM( price ) AS price
                FROM
                        sales
                GROUP BY seller_id
        )AS Subquery1
)AS Subquery2
JOIN
(
        SELECT
                seller_id,
                SUM( price ) AS price
        FROM
                sales
        GROUP BY seller_id   
)AS s ON s.price = Subquery2.p

-- SOLUTION 2
SELECT
        seller_id
FROM
        sales
GROUP BY seller_id
HAVING SUM( price ) = (
        SELECT 
                MAX( price ) 
        FROM 
        (
                SELECT
                        SUM( price ) as price
                FROM
                        sales
                GROUP BY seller_id 
        )AS Subquery1
)