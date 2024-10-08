-- Leetcode: https://leetcode.com/problems/find-cumulative-salary-of-an-employee/description/

SELECT 
        id,
        month,
        sums AS salary
FROM 
(
        SELECT
                *,
                SUM(salary) OVER 
                        (
                                PARTITION BY Subquery1.id 
                                ORDER BY Subquery1.id , Subquery1.month
                                ROWS 2 PRECEDING 
                        ) AS sums 
        FROM 
        (
                SELECT
                        *,
                        ROW_NUMBER() OVER
                                        (
                                                PARTITION BY employee.id 
                                                ORDER BY employee.id ASC, employee.month DESC
                                        ) AS row_num
                FROM
                        employee
                ORDER BY id ASC, month DESC
        ) AS Subquery1
        WHERE 
                Subquery1.row_num > 1 
) AS Subquery2
ORDER BY Subquery2.id ASC, Subquery2.month DESC, Subquery2.sums DESC;