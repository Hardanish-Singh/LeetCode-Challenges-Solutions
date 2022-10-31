-- Leetcode: https://leetcode.com/problems/project-employees-ii/

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