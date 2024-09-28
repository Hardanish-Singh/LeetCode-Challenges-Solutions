-- Leetcode: https://leetcode.com/problems/employees-earning-more-than-their-managers/

-- Solution 1
SELECT
    emp.Name AS Employee
FROM
    Employee AS emp
JOIN Employee AS mgr ON mgr.id = emp.ManagerId
WHERE emp.Salary > mgr.Salary;

-- Solution 2
SELECT
    emp.Name AS Employee
FROM Employee emp, Employee mgr
WHERE mgr.id = emp.ManagerId AND emp.Salary > mgr.Salary;
