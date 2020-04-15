/*
        Write a SQL query to rank scores. If there is a tie between two scores, 
        both should have the same ranking. Note that after a tie, 
        the next ranking number should be the next consecutive integer value. 
        In other words, there should be no "holes" between ranks.

                +----+-------+
                | Id | Score |
                +----+-------+
                | 1  | 3.50  |
                | 2  | 3.65  |
                | 3  | 4.00  |
                | 4  | 3.85  |
                | 5  | 4.00  |
                | 6  | 3.65  |
                +----+-------+
        For example, given the above Scores table, 
        your query should generate the following report (order by highest score):

                +-------+------+
                | Score | Rank |
                +-------+------+
                | 4.00  | 1    |
                | 4.00  | 1    |
                | 3.85  | 2    |
                | 3.65  | 3    |
                | 3.65  | 3    |
                | 3.50  | 4    |
                +-------+------+
*/
SELECT
        score2.Score,
        Subquery2.Rank
FROM
(
    SELECT 
        @row_number:= @row_number + 1 AS Rank,
        Subquery1.Score
    FROM 
    (
        SELECT
            DISTINCT 
                Scores.Score
        FROM
                Scores,
        (SELECT @row_number := 0) AS row_number
        ORDER BY Scores.Score DESC
    )AS Subquery1		
)AS Subquery2

INNER JOIN Scores AS score2 ON score2.Score = Subquery2.Score
ORDER BY score2.Score DESC
                