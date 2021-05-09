/*
     Write a SQL query to find all numbers that appear at least three times consecutively.

               +----+-----+
               | Id | Num |
               +----+-----+
               | 1  |  1  |
               | 2  |  1  |
               | 3  |  1  |
               | 4  |  2  |
               | 5  |  1  |
               | 6  |  2  |
               | 7  |  2  |
               +----+-----+
     For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.

               +-----------------+
               | ConsecutiveNums |
               +-----------------+
               | 1               |
               +-----------------+
*/
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
WHERE SubQuery2.Count_Nums >= 3