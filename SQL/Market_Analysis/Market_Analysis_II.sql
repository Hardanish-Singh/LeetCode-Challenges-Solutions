SELECT
        users.user_id AS seller_id,
        CASE WHEN items.item_brand = users.favorite_brand THEN 'yes' ELSE 'no' END AS 2nd_item_fav_brand
FROM
        users
LEFT JOIN
(
        SELECT 
                * 
        FROM
        (
                SELECT
                        seller_id,
                        order_date,
                        item_id,
                        row_number() OVER(PARTITION BY seller_id ORDER BY order_date ) as rownumber
                FROM
                        orders
                ) AS x
        WHERE x.rownumber = 2
) AS orders1 ON orders1.seller_id = users.user_id

LEFT JOIN items AS items ON items.item_id = orders1.item_id