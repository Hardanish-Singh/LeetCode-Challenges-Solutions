-- Leetcode: https://leetcode.com/problems/nth-highest-salary/

-- Solution 1
CREATE FUNCTION getNthHighestSalary(N INT) 

RETURNS INT

BEGIN
        -- Subtract 1 from N to get the correct index in the ordered salary list.
        SET N = N - 1;
        RETURN ( SELECT DISTINCT(salary) from Employee order by salary DESC LIMIT 1 OFFSET N );

END;

-- Solution 2
CREATE FUNCTION getNthHighestSalary(N INT) 

RETURNS INT

BEGIN

        DECLARE result INT;
        SELECT salary INTO result
        FROM
        (
                SELECT 
                        DISTINCT salary, 
                        ROW_NUMBER() OVER (ORDER BY salary DESC) AS RowNum
                FROM employee
                GROUP BY salary
        ) AS RankedSalaries
        WHERE RowNum = N;
        RETURN result;

END
