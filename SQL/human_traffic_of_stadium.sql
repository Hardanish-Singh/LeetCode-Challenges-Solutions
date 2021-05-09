/*
        SQL Schema
        Table: Stadium

        +---------------+---------+
        | Column Name   | Type    |
        +---------------+---------+
        | id            | int     |
        | visit_date    | date    |
        | people        | int     |
        +---------------+---------+
        visit_date is the primary key for this table.
        Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
        No two rows will have the same visit_date, and as the id increases, the dates increase as well.
        

        Write an SQL query to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.

        Return the result table ordered by visit_date in ascending order.

        The query result format is in the following example.

        

        Stadium table:
        +------+------------+-----------+
        | id   | visit_date | people    |
        +------+------------+-----------+
        | 1    | 2017-01-01 | 10        |
        | 2    | 2017-01-02 | 109       |
        | 3    | 2017-01-03 | 150       |
        | 4    | 2017-01-04 | 99        |
        | 5    | 2017-01-05 | 145       |
        | 6    | 2017-01-06 | 1455      |
        | 7    | 2017-01-07 | 199       |
        | 8    | 2017-01-09 | 188       |
        +------+------------+-----------+

        Result table:
        +------+------------+-----------+
        | id   | visit_date | people    |
        +------+------------+-----------+
        | 5    | 2017-01-05 | 145       |
        | 6    | 2017-01-06 | 1455      |
        | 7    | 2017-01-07 | 199       |
        | 8    | 2017-01-09 | 188       |
        +------+------------+-----------+
        The four rows with ids 5, 6, 7, and 8 have consecutive ids and each of them has >= 100 people attended. Note that row 8 was included even though the visit_date was not the next day after row 7.
        The rows with ids 2 and 3 are not included because we need at least three consecutive ids.
*/
WITH common_table_expression AS (
                                        SELECT 
                                                COUNT(groupped_data), 
                                                MIN(id) AS limit1, 
                                                MAX(id) AS limit2
                                        FROM 
                                        (
                                                SELECT  
                                                        *,
                                                        @rownumber :=  CASE 
                                                                                WHEN @check_groupping = groupped_data
                                                                                        THEN
                                                                                                @rownumber 
                                                                                ELSE
                                                                                        @rownumber := @rownumber + 1
                                                                        END AS rank_groupping,
                                                        @check_groupping := groupped_data
                                                FROM
                                                (
                                                        SELECT
                                                                *,
                                                                CASE 
                                                                        WHEN people >= 100 
                                                                                THEN @is_groupped :=  1
                                                                ELSE 
                                                                        @is_groupped := 0
                                                                END AS groupped_data,
                                                                ( SELECT @rownumber := 0 ) AS rownumber,
                                                                ( SELECT @check_groupping := ' ' ) AS check_groupping
                                                        FROM
                                                                stadium,
                                                        ( SELECT @is_groupped := 0 )  AS is_groupped
                                                )AS SubQuery2
                                        )AS SubQuery3
                                        GROUP BY SubQuery3.rank_groupping
                                        HAVING COUNT(groupped_data) >= 3
                                ) 
SELECT 
        s2.* 
FROM 
        common_table_expression
JOIN stadium s2 ON s2.id >= common_table_expression.limit1 AND s2.id <= common_table_expression.limit2
ORDER BY s2.visit_date;