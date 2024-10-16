-- Leetcode: https://leetcode.com/problems/find-median-given-frequency-of-numbers/

-- IDEA BEHIND SOLUTION 1
-- Unnesting the numbers(num) using WITH RECURSIVE
-- Finding Total Number of Rows
-- Checking if total number of rows is even or odd
-- Formula if even number of rows is AVG(total/2, total/2 + 1)
-- Formula if odd number of rows is AVG(total/2 + 1)

-- Solution 1
WITH RECURSIVE recursive_cte AS (
  SELECT
    num,
    frequency,
    1 AS cnt
  FROM Numbers
  
  UNION ALL
  
  SELECT 
    num,
    frequency, 
    cnt + 1 AS cnt
  FROM recursive_cte
  WHERE cnt < Frequency
), CTE1 AS (
    SELECT 
      num,
      frequency,
      ROW_NUMBER() OVER( ORDER BY num ) AS rn,
      (SELECT COUNT(*) FROM recursive_cte) AS total
    FROM 
      recursive_cte 
    ORDER BY num
), CTE2 AS (
      SELECT 
        *,
        CASE 
          WHEN MOD(total, 2) = 0 AND rn = (total/2) OR rn = (total/2) + 1 THEN 'T'
          WHEN MOD(total, 2) != 0 AND rn = CEIL(total/2) THEN 'T'
          ELSE 'F'
        END AS flag
      FROM CTE1
)
SELECT 
  ROUND(AVG(num), 1) AS median 
FROM CTE2
WHERE flag = 'T';

-- Solution 2
SELECT 
    SUM(median) AS median 
FROM 
(
    SELECT 
        CASE 
            WHEN vals = 1 AND MOD(vals2, 2) = 0 THEN sum(num * 2) / 2 
            WHEN vals > 1 AND MOD(vals2, 2) = 0 THEN sum(num) / 2
            ELSE sum(num) 
        END AS median
    FROM
    (
        SELECT 
            *,
            CASE 
                WHEN 
                        vals1 >= ( CASE WHEN MOD(x.vals2, 2) = 0 THEN x.vals2 / 2 ELSE CEIL(x.vals2 / 2) END )
                    AND 
                        vals1 - frequency < ( CASE WHEN MOD(x.vals2, 2) = 0 THEN x.vals2 / 2 + 1 ELSE CEIL(x.vals2 / 2) END )
                    THEN   @rn := @rn + 1
                ELSE 0
            END AS vals
        FROM 
        (
            SELECT 
                n1.*,
                SUM(n1.frequency) OVER (ORDER BY num ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS vals1,
               ( SELECT SUM(frequency) AS vals2 FROM numbers) AS vals2,
               ( SELECT @rn := 0 ) AS rn
            FROM numbers n1
        ) AS x
    )AS xx
    WHERE vals >= 1
    GROUP BY vals
) AS xxx;