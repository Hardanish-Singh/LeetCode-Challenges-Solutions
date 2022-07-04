/*
        There is a table courses with columns: student and class

        Please list out all classes which have more than or equal to 5 students.

        For example, the table:

        +---------+------------+
        | student | class      |
        +---------+------------+
        | A       | Math       |
        | B       | English    |
        | C       | Math       |
        | D       | Biology    |
        | E       | Math       |
        | F       | Computer   |
        | G       | Math       |
        | H       | Math       |
        | I       | Math       |
        +---------+------------+
        
        Output:

        +---------+
        | class   |
        +---------+
        | Math    |
        +---------+
        

        Note: The students should not be counted duplicate in each course.
*/

-- SOLUTION 1

SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT(DISTINCT student) >= 5

-- SOLUTION 2

SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT( * ) >= 5

-- SOLUTION 3

SELECT
    DISTINCT
        c2.class
FROM
    courses as c1
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