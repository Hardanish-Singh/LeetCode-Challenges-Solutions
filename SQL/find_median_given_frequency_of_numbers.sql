-- Leetcode: https://leetcode.com/problems/find-median-given-frequency-of-numbers/

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
          WHEN MOD(total, 2) != 0 AND rn = (total/2) THEN 'T'
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
    select case when vals = 1 and MOD(vals2,2) = 0 then sum(number*2)/2 
                when vals > 1 and MOD(vals2,2) = 0 then sum(number)/2
                else sum(number) 
           end as median
    from
    (
        SELECT 
            *,
            CASE WHEN vals1 >= (CASE WHEN MOD(x.vals2,2) = 0 THEN x.vals2/2 ELSE CEIL(x.vals2/2) END) AND vals1-frequency < (CASE WHEN MOD(x.vals2,2) = 0 THEN x.vals2/2+1 ELSE CEIL(x.vals2/2) END)
                                THEN   @rn := @rn + 1
                 ELSE 
                      0
            END AS vals
        FROM 
        (
            SELECT 
                n1.*,
                SUM(n1.frequency) OVER (ORDER BY number ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS vals1,
               ( SELECT SUM(frequency) AS vals2 FROM numbers) AS vals2,
               ( SELECT @rn := 0 ) AS rn
            FROM 
                numbers n1
        ) AS x
    )AS xx
    where vals >=1
    group by vals
) AS xxx;