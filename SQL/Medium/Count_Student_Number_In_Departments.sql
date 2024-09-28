-- Leetcode: https://leetcode.com/problems/count-student-number-in-departments/

-- Solution 1
SELECT
    dept_name, 
    COUNT(student_id) AS student_number
FROM
    department
LEFT JOIN student USING(dept_id)
GROUP BY department.dept_name
ORDER BY student_number DESC, department.dept_name;

