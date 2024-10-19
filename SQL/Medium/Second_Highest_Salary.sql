-- Leetcode: https://leetcode.com/problems/second-highest-salary/

-- Solution 1
SELECT
    IFNULL
        (
            (
                SELECT DISTINCT Salary
                FROM Employee ORDER BY Salary DESC 
                LIMIT 1 OFFSET 1
            ), NULL
        )AS SecondHighestSalary;

-- Solution 2
SELECT 
        CASE 
            WHEN 
                COUNT(*) >=2 
                    THEN 
                        MIN(Salary)
            ELSE 
                NULL 
        END AS SecondHighestSalary
FROM 
(
        SELECT DISTINCT Employee.Salary
        FROM Employee
        ORDER BY Employee.Salary DESC
        LIMIT 2
)AS SubQuery

-- Solution 3
SELECT 
    MAX(salary) AS SecondHighestSalary 
FROM employee 
WHERE salary != ( 
                    SELECT 
                            MAX(salary) 
                    FROM employee 
                )

-- Solution 4
SELECT 
    MAX(salary) AS SecondHighestSalary 
FROM employee 
WHERE salary < ( 
                    SELECT 
                            MAX(salary) 
                    FROM employee 
                )