# Write your MySQL query statement below

SELECT
        SubQuery.customer_id,
        new_order_data.product_id,
        products.product_name
FROM
(
        SELECT
                order_data.customer_id,
                MAX( order_data.count_products ) AS max_products_per_customer
        FROM
                customers AS customer_data
        JOIN
        (
                SELECT
                        customer_id,
                        product_id,
                        COUNT( product_id ) AS count_products
                FROM 
                        orders
                GROUP BY customer_id, product_id
        )AS order_data ON order_data.customer_id = customer_data.customer_id
        GROUP BY customer_id
)AS SubQuery
JOIN 
(
        SELECT
                customer_id,
                product_id,
                COUNT( product_id ) AS count_products
        FROM 
                orders
        GROUP BY customer_id, product_id
) AS new_order_data ON new_order_data.customer_id = SubQuery.customer_id AND SubQuery.max_products_per_customer = new_order_data.count_products 
JOIN products ON products.product_id = new_order_data.product_id