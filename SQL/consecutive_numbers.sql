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
SELECT 
     DISTINCT Num AS ConsecutiveNums
FROM 
(
     SELECT 
          COUNT(Num) AS Count_Nums,   
          rank_order,
          Num
     FROM
     (
          SELECT 
               Num,
               @rownumber :=  CASE 
                                   WHEN @check_score = Num
                                        THEN @rownumber
                                   ELSE @rownumber := @rownumber + 1
                              END AS rank_order,
               @check_score := Num
          FROM 
               Logs,
               (SELECT @rownumber := 0) AS rownumber,
               (SELECT @check_score := ' ') AS check_score
     )AS SubQuery1
     GROUP BY SubQuery1.rank_order, SubQuery1.Num
)AS SubQuery2
WHERE SubQuery2.Count_Nums >= 3;