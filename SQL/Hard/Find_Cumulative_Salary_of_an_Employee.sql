-- Leetcode: https://leetcode.com/problems/find-cumulative-salary-of-an-employee/

WITH CTE AS (
        SELECT
                id,
                month,
                SUM(salary) OVER (
                        PARTITION BY id
                        ORDER BY month
                        ROWS 2 PRECEDING
                ) AS salary,
                ROW_NUMBER() OVER (
                        PARTITION BY id
                        ORDER BY month DESC
                ) AS rn
        FROM Employee
)
SELECT id, month, salary FROM CTE
WHERE rn > 1
ORDER BY id ASC, month DESC