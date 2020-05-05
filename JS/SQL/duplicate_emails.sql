/*
    Write a SQL query to find all duplicate emails in a table named Person.

        +----+---------+
        | Id | Email   |
        +----+---------+
        | 1  | a@b.com |
        | 2  | c@d.com |
        | 3  | a@b.com |
        +----+---------+
    For example, your query should return the following for the above table:

            +---------+
            | Email   |
            +---------+
            | a@b.com |
            +---------+
*/
SELECT 
        Email 
FROM 
        (
            SELECT 
                COUNT(Email) AS count_scores, 
                Rank,
                Email
            FROM
            (
                SELECT 
                    Email,
                    @row_number := CASE WHEN @check_score = Email THEN @row_number ELSE @row_number := @row_number + 1 END AS Rank, 
                    @check_score := Email
                FROM 
                    Person,
                    (SELECT @row_number := 0) AS row_number,
                    (SELECT @check_score := 0) AS check_score
                ORDER BY Email 
            )AS SubQuery1
            GROUP BY SubQuery1.Rank, SubQuery1.Email
)AS SubQuery2 WHERE SubQuery2.count_scores > 1