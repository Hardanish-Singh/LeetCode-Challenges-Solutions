SELECT
    id,
    CASE WHEN MOD(id,2) = 0 THEN COALESCE(next_seat, student)
         ELSE COALESCE(previous_seat, student)
    END AS student
FROM
(
    SELECT
        id,
        student,
        LAG(student) OVER 
        (
                ORDER BY id
        ) AS next_seat,
        LEAD(student) OVER 
        (
                ORDER BY id
        ) AS previous_seat
    FROM
        seat
) AS SubQuery