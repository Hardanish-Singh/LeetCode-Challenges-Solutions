-- Leetcode: https://leetcode.com/problems/market-analysis-i/

SELECT 
    users.user_id as buyer_id,
    users.join_date,
    count(orders.buyer_id) as orders_in_2019
FROM users
LEFT JOIN orders ON orders.buyer_id = users.user_id AND year(orders.order_date) = '2019'
GROUP BY users.user_id, users.join_date