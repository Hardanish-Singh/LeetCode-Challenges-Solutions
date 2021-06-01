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
        row_number() OVER (PARTITION BY continent ORDER BY name) AS rownumber
    FROM
        student
)AS SubQuery
GROUP BY rownumber