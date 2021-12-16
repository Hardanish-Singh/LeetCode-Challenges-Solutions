SELECT 
        customer_id 
FROM 
(
        SELECT
                customer_id,
                COUNT( DISTINCT product_key ) AS count_1,
                (
                        SELECT 
                                COUNT( DISTINCT product_key ) AS c2 
                        FROM 
                                Product
                )AS count_2
        FROM
                Customer
        GROUP BY customer_id
        ORDER BY customer_id
) AS x
WHERE x.count_1 = x.count_2;