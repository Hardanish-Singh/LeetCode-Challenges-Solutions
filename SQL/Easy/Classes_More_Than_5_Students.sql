-- Leetcode: https://leetcode.com/problems/classes-more-than-5-students/

-- SOLUTION 1
SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT( student ) >= 5;

-- SOLUTION 2
SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT( * ) >= 5;