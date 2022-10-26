-- Leetcode: https://leetcode.com/problems/product-sales-analysis-iii/

SELECT
        product_id,
        year AS first_year,
        quantity,
        price
FROM
        Sales
WHERE ( year, product_id ) IN (

        SELECT
                MIN( year ) AS first_year,
                product_id
        FROM
                Sales
        GROUP BY product_id      
)