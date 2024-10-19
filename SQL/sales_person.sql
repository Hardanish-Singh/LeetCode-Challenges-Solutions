-- Leetcode: https://leetcode.com/problems/sales-person/

SELECT 
        name 
FROM 
        salesperson 
WHERE sales_id NOT IN (
                        SELECT
                                sales_id
                        FROM
                                orders
                        JOIN company ON company.com_id = orders.com_id
                        WHERE company.name = 'RED'
                      )