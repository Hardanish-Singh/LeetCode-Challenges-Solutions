SELECT
        Project.project_id,
        Project.employee_id
FROM
(

        SELECT
                Project.project_id,
                MAX( emp.experience_years ) AS maximum_experience_per_project
        FROM
                Project
        JOIN
        (
                SELECT 
                        employee_id, 
                        experience_years 
                FROM 
                        Employee 
        ) AS emp ON emp.employee_id = Project.employee_id

        GROUP BY Project.project_id

) AS x
JOIN Project ON Project.project_id = x.project_id
JOIN Employee ON Employee.employee_id = Project.employee_id AND Employee.experience_years = x.maximum_experience_per_project