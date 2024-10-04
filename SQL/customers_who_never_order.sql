-- Leetcode: https://leetcode.com/problems/customers-who-never-order/

SELECT
        Customers.Name AS Customers
FROM
        Customers
LEFT JOIN Orders ON Orders.CustomerId = Customers.Id 
WHERE Orders.id IS NULL