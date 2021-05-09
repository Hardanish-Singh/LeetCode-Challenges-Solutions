WITH common_table_expression AS (
                                        SELECT 
                                                COUNT(datas), 
                                                rank_order, 
                                                MIN(id1) AS limit1, 
                                                MAX(id1) AS limit2 
                                        FROM 
                                        (
                                                SELECT  
                                                        *,
                                                        @rownumber :=  CASE 
                                                                        WHEN
                                                                                @check_score = datas
                                                                                THEN
                                                                                        @rownumber 
                                                                        ELSE
                                                                                @rownumber := @rownumber + 1
                                                                        END AS rank_order,
                                                        @check_score := datas
                                                FROM
                                                (
                                                        SELECT
                                                                id1,
                                                                id2,
                                                                id1-id2 AS consecutive_ids_count,
                                                                visit_date,
                                                                people,
                                                                CASE 
                                                                        WHEN people >= 100 
                                                                                THEN @groupings :=  1
                                                                        ELSE 
                                                                                @groupings := 0
                                                                END AS datas
                                                        FROM
                                                        (
                                                                SELECT
                                                                        id AS id1,
                                                                        LAG(id, 1) OVER ( ) AS id2,
                                                                        visit_date,
                                                                        people,
                                                                        ( SELECT @groupings := 0 )  AS groupings
                                                                FROM
                                                                        stadium,
                                                                        (SELECT @rownumber := 0) AS rownumber,
                                                                        (SELECT @check_score := ' ') AS check_score
                                                                ORDER BY visit_date
                                                        ) AS SubQuery1
                                                )AS SubQuery2
                                        )AS SubQuery3
                                        GROUP BY SubQuery3.rank_order
                                        HAVING COUNT(datas) >= 3
) 
SELECT 
        s2.id, 
        s2.visit_date, 
        s2.people 
FROM 
        common_table_expression
JOIN stadium s2 ON s2.id >= common_table_expression.limit1 AND s2.id <= common_table_expression.limit2
ORDER BY s2.visit_date