-- Leetcode: https://leetcode.com/problems/students-report-by-geography/

/*
        SOLUTION 1 USING WINDOW FUNCTION
*/
SELECT 
    MAX(america) AS America,
    MAX(asia) AS Asia,
    MAX(europe) AS Europe 
from 
(
    SELECT
        CASE 
                WHEN continent = 'America' 
                        THEN name 
        END AS 'America',
        CASE 
                WHEN continent = 'Asia' 
                        THEN name 
        END AS 'Asia',
        CASE 
                WHEN continent = 'Europe' 
                        THEN name 
        END AS 'Europe',
        ROW_NUMBER() OVER (PARTITION BY continent ORDER BY name) AS rownumber
    FROM
        student
)AS SubQuery
GROUP BY rownumber;

/*
        SOLUTION 2 WITHOUT USING WINDOW FUNCTION
*/
SELECT
    MAX(America) AS America,
    MAX(Asia) AS Asia,
    MAX(Europe) AS Europe
FROM
(
    SELECT
        CASE WHEN continent = 'America' THEN name END AS 'America',
        CASE WHEN continent = 'Asia' THEN name END AS 'Asia',
        CASE WHEN continent = 'Europe' THEN name END AS 'Europe',
        CASE
            WHEN @rowcontinent IS NULL OR @rowcontinent = continent
                THEN @rownumber := @rownumber + 1
            WHEN @rowcontinent != continent
                THEN @rownumber := 1
        END AS groupping,
        @rowcontinent := continent
    FROM
        student,
        (SELECT @rownumber := 0) AS rownumber,
        (SELECT @rowcontinent := NULL) AS rowcontinent
    ORDER BY continent, name
) AS SubQuery
GROUP BY SubQuery.groupping;