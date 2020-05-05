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
FROM (

        SELECT 
               COUNT(Num) AS Count_Nums,   
               Rank,
               Num
        FROM
        (
               SELECT 
                    Num,
                    @row_number :=  CASE 
                                        WHEN
                                        @check_score = Num
                                             THEN
                                                  @row_number
                                        ELSE
                                        @row_number := @row_number + 1
                                   END AS Rank,
                    @check_score := Num
               FROM 
                    Logs,
                    (SELECT @row_number := 0) AS row_number,
                    (SELECT @check_score := ' ') AS check_score
        )AS SubQuery1
        GROUP BY SubQuery1.Rank, SubQuery1.Num
)AS SubQuery2
WHERE SubQuery2.Count_Nums >= 3