SELECT 
        SubQuery.student_id,
        MIN( Enrollments.course_id ) AS course_id,
        SubQuery.grade

FROM 
(

        SELECT
                student_id,
                MAX( grade ) AS grade
        FROM
                Enrollments
        GROUP BY student_id
        
) AS SubQuery

JOIN Enrollments ON Enrollments.student_id = SubQuery.student_id AND Enrollments.grade = SubQuery.grade

GROUP BY SubQuery.student_id, SubQuery.grade
ORDER BY SubQuery.student_id