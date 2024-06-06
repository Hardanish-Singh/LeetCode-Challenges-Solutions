-- Leetcode: 

-- Solution 1
SELECT 
     DISTINCT num AS ConsecutiveNums
FROM logs l1
WHERE
     EXISTS(SELECT * FROM logs l2 WHERE l2.id = l1.id + 1 AND l1.num = l2.num) 
AND
     EXISTS(SELECT * FROM logs l3 WHERE l3.id = l1.id + 2 AND l3.num = l1.num) 

-- Solution 2
WITH cte AS 
(
     SELECT
          *,
          LEAD(num, 1) OVER(ORDER BY id) AS num1, -- LEAD function will check for the next row for LEAD(num, 1)
          LEAD(num, 2) OVER(ORDER BY id) AS num2, -- LEAD function will check for the next to next row for LEAD(num, 2)
          LEAD(id, 1)  OVER(ORDER BY id) AS id1,  -- LEAD function will check for the next row for LEAD(id, 1)
          LEAD(id, 2)  OVER(ORDER BY id) AS id2   -- LEAD function will check for the next to next row for LEAD(id, 2)
     FROM Logs
)

SELECT
     DISTINCT(num) AS ConsecutiveNums
FROM cte
WHERE
     num = num1 
AND 
     num = num2 
AND 
     id1 = id + 1 
AND 
     id2 = id + 2;