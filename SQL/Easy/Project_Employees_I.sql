SELECT
        project_id,
        ROUND( AVG(experience_years), 2) AS average_years
FROM
        Project
JOIN Employee ON Employee.employee_id = Project.employee_id
GROUP BY project_id
ORDER BY project_id