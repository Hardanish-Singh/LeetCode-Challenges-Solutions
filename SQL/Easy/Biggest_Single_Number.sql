-- Leetcode: https://leetcode.com/problems/biggest-single-number/

-- SOLUTION 1
SELECT 
        MAX(num) AS num 
FROM
(
        SELECT
                COUNT(num) AS count_num,
                num
        FROM
                my_numbers
        GROUP BY num
)AS x 
WHERE x.count_num = 1

-- SOLUTION 2
SELECT
        IFNULL(
                (
                        SELECT 
                                num 
                        FROM 
                                my_numbers
                        GROUP BY num
                        HAVING COUNT(num) = 1
                        ORDER BY num DESC
                        LIMIT 1
                ),
                NULL
              ) AS num