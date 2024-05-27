-- Leetcode: https://leetcode.com/problems/employees-earning-more-than-their-managers/

-- Solution 1
SELECT
    emp.Name AS Employee
FROM
    Employee AS emp
JOIN Employee AS mgr ON mgr.id = emp.ManagerId 
WHERE emp.Salary > mgr.Salary