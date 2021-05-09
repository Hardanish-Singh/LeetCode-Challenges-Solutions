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