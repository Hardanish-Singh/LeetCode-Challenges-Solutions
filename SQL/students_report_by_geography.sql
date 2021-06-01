/*
        SQL Schema
                A U.S graduate school has students from Asia, Europe and America. The students' location information are stored in table student as below.

                | name   | continent |
                |--------|-----------|
                | Jack   | America   |
                | Pascal | Europe    |
                | Xi     | Asia      |
                | Jane   | America   |
                

                Pivot the continent column in this table so that each name is sorted alphabetically and displayed underneath its corresponding continent. 
                The output headers should be America, Asia and Europe respectively. It is guaranteed that the student number from America is no less than either Asia or Europe.
                
                For the sample input, the output is:

                | America | Asia | Europe |
                |---------|------|--------|
                | Jack    | Xi   | Pascal |
                | Jane    |      |        |
*/

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
        row_number() OVER (PARTITION BY continent ORDER BY name) AS rownumber
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