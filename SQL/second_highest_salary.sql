/*
        Write a SQL query to get the second highest salary from the Employee table.

                +----+--------+
                | Id | Salary |
                +----+--------+
                | 1  | 100    |
                | 2  | 200    |
                | 3  | 300    |
                +----+--------+
        For example, given the above Employee table, the query should return 200 as the second highest salary. 
        If there is no second highest salary, then the query should return null.

                +---------------------+
                | SecondHighestSalary |
                +---------------------+
                | 200                 |
                +---------------------+
*/

/*
        SOLUTION 1
*/
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
        SELECT
                DISTINCT 
                        Employee.Salary
        FROM 
                Employee
        ORDER BY Employee.Salary DESC
        LIMIT 2
)AS SubQuery

/*
        SOLUTION 2
*/
SELECT 
    MAX(salary) AS SecondHighestSalary 
FROM employee 
WHERE salary != ( 
                    SELECT 
                            MAX(salary) 
                    FROM employee 
                )

/*
        SOLUTION 3
*/
SELECT 
    MAX(salary) AS SecondHighestSalary 
FROM employee 
WHERE salary < ( 
                    SELECT 
                            MAX(salary) 
                    FROM employee 
                )