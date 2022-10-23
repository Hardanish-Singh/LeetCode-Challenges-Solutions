-- Leetcode: https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/

SELECT
        *
FROM
        Customers
WHERE
        customer_id IN 
                        (
                                SELECT
                                        customer_id
                                FROM
                                        Orders
                                WHERE
                                        product_name = 'A'
                        )
AND
        customer_id IN
                        (
                                SELECT
                                        customer_id
                                FROM
                                        Orders
                                WHERE
                                        product_name = 'B'
                        )
AND
        customer_id NOT IN 
                        (
                                SELECT
                                        customer_id
                                FROM
                                        Orders
                                WHERE
                                        product_name = 'C'
                        )
        

ORDER BY customer_id;