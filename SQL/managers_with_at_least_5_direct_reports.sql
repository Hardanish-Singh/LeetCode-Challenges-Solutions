-- Leetcode: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/

-- Solution 1
SELECT 
        name 
FROM 
        Employee 
WHERE id IN (
        SELECT managerId 
        FROM Employee 
        GROUP BY managerId 
        HAVING COUNT(managerId) >= 5
);

-- Solution 2
SELECT
        e1.name
FROM
        employee e1
JOIN
(
        SELECT 
                managerid, 
                COUNT(*) AS c 
        FROM 
                employee 
        GROUP BY 
                managerid
)AS e2 ON e2.managerid = e1.id

WHERE e2.c >= 5