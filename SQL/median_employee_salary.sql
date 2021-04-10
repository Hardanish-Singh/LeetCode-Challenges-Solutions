/*

    Table: Employee

    +-----+------------+--------+
    |Id   | Company    | Salary |
    +-----+------------+--------+
    |1    | A          | 2341   |
    |2    | A          | 341    |
    |3    | A          | 15     |
    |4    | A          | 15314  |
    |5    | A          | 451    |
    |6    | A          | 513    |
    |7    | B          | 15     |
    |8    | B          | 13     |
    |9    | B          | 1154   |
    |10   | B          | 1345   |
    |11   | B          | 1221   |
    |12   | B          | 234    |
    |13   | C          | 2345   |
    |14   | C          | 2645   |
    |15   | C          | 2645   |
    |16   | C          | 2652   |
    |17   | C          | 65     |
    +-----+------------+--------+
    
    Write a SQL query to find the median salary of each company.

    +-----+------------+--------+
    |Id   | Company    | Salary |
    +-----+------------+--------+
    |5    | A          | 451    |
    |6    | A          | 513    |
    |12   | B          | 234    |
    |9    | B          | 1154   |
    |14   | C          | 2645   |
    +-----+------------+--------+

*/
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
