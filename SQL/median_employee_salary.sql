-- Leetcode: https://leetcode.com/problems/median-employee-salary/

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
                        )
