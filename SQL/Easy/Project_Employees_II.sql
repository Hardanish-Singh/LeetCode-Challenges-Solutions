/*
        Table: Project

        +-------------+---------+
        | Column Name | Type    |
        +-------------+---------+
        | project_id  | int     |
        | employee_id | int     |
        +-------------+---------+

        (project_id, employee_id) is the primary key of this table.
        employee_id is a foreign key to Employee table.
        Each row of this table indicates that the employee with employee_id is working on the project with project_id.

        Table: Employee

        +------------------+---------+
        | Column Name      | Type    |
        +------------------+---------+
        | employee_id      | int     |
        | name             | varchar |
        | experience_years | int     |
        +------------------+---------+
        employee_id is the primary key of this table.
        Each row of this table contains information about one employee.

        Write an SQL query that reports all the projects that have the most employees.
        Return the result table in any order.
        The query result format is in the following example.

        Example 1:

        Input: 
                Project table:
                +-------------+-------------+
                | project_id  | employee_id |
                +-------------+-------------+
                | 1           | 1           |
                | 1           | 2           |
                | 1           | 3           |
                | 2           | 1           |
                | 2           | 4           |
                +-------------+-------------+
                Employee table:
                +-------------+--------+------------------+
                | employee_id | name   | experience_years |
                +-------------+--------+------------------+
                | 1           | Khaled | 3                |
                | 2           | Ali    | 2                |
                | 3           | John   | 1                |
                | 4           | Doe    | 2                |
                +-------------+--------+------------------+
        Output: 
                +-------------+
                | project_id  |
                +-------------+
                | 1           |
                +-------------+
                Explanation: The first project has 3 employees while the second one has 2.
*/

-- SOLUTION 1
SELECT
        project_id
FROM
        Project
GROUP BY project_id
HAVING COUNT( project_id ) =
                        (
                                SELECT
                                        COUNT(*) AS max_count
                                FROM
                                        Project
                                GROUP BY project_id
                                ORDER BY max_count DESC
                                LIMIT 1
                        )

-- SOLUTION 2
SELECT
        project_id
FROM
        Project
GROUP BY project_id
HAVING COUNT( project_id ) =
                        (
                                SELECT
                                        MAX(max_count)
                                FROM
                                (
                                        SELECT
                                                COUNT(*) AS max_count
                                        FROM
                                                Project
                                        GROUP BY project_id
                                )AS SubQuery
                        )