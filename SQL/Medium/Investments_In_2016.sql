-- Leetcode: https://leetcode.com/problems/investments-in-2016/

-- Solution 1
SELECT 
        ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM 
        Insurance
WHERE tiv_2015 IN (
        SELECT tiv_2015
        FROM Insurance
        GROUP BY tiv_2015
        HAVING COUNT(*) > 1
)
AND (lat, lon) IN (
        SELECT lat, lon
        FROM Insurance
        GROUP BY lat, lon
        HAVING COUNT(*) = 1
)

-- Solution 2
SELECT 
        ROUND(SUM(tiv_2016),2) AS tiv_2016
FROM
(
        SELECT
                i1.*,
                i2.c1,
                i3.c2
        FROM    
                insurance i1
        JOIN 
        (
                SELECT
                        tiv_2015,
                        COUNT(*) AS c1
                FROM
                        insurance i2
                GROUP BY 
                        tiv_2015
        )AS i2 ON i2.tiv_2015 = i1.tiv_2015
        JOIN 
        (
                SELECT
                        lat,
                        lon,
                        COUNT(*) AS c2
                FROM
                        insurance i2
                GROUP BY 
                        lat,
                        lon
        )AS i3 ON i3.lat = i1.lat AND i3.lon = i1.lon
) AS x
WHERE x.c1 > 1 AND x.c2 = 1;
