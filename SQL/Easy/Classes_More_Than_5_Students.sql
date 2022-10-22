-- Leetcode: https://leetcode.com/problems/classes-more-than-5-students/

-- SOLUTION 1

SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT(DISTINCT student) >= 5;

-- SOLUTION 2

SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT( * ) >= 5;

-- SOLUTION 3

SELECT
    DISTINCT
        c2.class
FROM
    courses AS c1
JOIN
(
    SELECT
        class,
        COUNT( * ) AS class_count
    FROM
        courses
    GROUP BY class
) AS c2 ON c2.class = c1.class

WHERE c2.class_count >= 5;