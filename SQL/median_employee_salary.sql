-- Leetcode: https://leetcode.com/problems/median-employee-salary/

-- Solution 1
WITH CTE1 AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY company
            ORDER BY salary ASC
        ) AS rn,
        COUNT(*) OVER (PARTITION BY company) AS total
    FROM Employee
), CTE2 AS (
    SELECT 
        *,
        CASE 
            WHEN MOD(total, 2) = 0 AND rn = (total/2) OR rn = (total/2) + 1 THEN 'T' -- even number of rows
            WHEN MOD(total, 2) != 0 AND rn = CEIL(total/2) THEN 'T' -- Odd number of rows
            ELSE 'F'
        END AS flag
    FROM CTE1
)
SELECT 
    id,
    company,
    salary 
FROM CTE2 WHERE flag = 'T';

-- Solution 2
SELECT 
    id,
    company,
    salary
FROM 
(
    SELECT 
                e1.*,
                ROW_NUMBER() OVER
                                (
                                        PARTITION BY e1.company 
                                        ORDER BY e1.company, e1.salary
                                ) AS row_num,
                e2.raw_count
    FROM 
                employee e1
    JOIN
    (
        SELECT 
                company, 
                COUNT(*) AS raw_count 
        FROM 
                employee 
        GROUP BY company
    )  AS  e2 ON e2.company = e1.company
) AS SubQuery
WHERE SubQuery.row_num >= (
                            CASE 
                                WHEN MOD(SubQuery.raw_count,2) = 0 
                                    THEN SubQuery.raw_count/2 
                                ELSE CEIL(SubQuery.raw_count/2) 
                            END
                          )
AND SubQuery.row_num <= (
                            CASE 
                                WHEN MOD(SubQuery.raw_count,2) = 0 
                                    THEN SubQuery.raw_count/2+1 
                                ELSE CEIL(SubQuery.raw_count/2) 
                            END
                        );
