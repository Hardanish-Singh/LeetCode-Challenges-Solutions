-- Leetcode: https://leetcode.com/problems/employee-bonus/

SELECT
    employee.name,
    bonus.bonus
FROM
    employee
LEFT JOIN bonus ON bonus.empId = employee.empId
WHERE bonus.bonus < 1000 OR bonus.bonus IS NULL;