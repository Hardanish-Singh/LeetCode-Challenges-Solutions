-- Leetcode: https://leetcode.com/problems/tree-node/

SELECT 
    id,
    'Root' AS Type
FROM
    tree
WHERE p_id IS NULL 

UNION ALL 

SELECT
    t2.p_id AS id,
    'Inner' AS Type
FROM 
    tree t1
JOIN
(
    SELECT
        t2.p_id,
        'Inner' AS Type
    FROM 
        tree t2
    GROUP BY t2.p_id
)AS t2 ON t1.id = t2.p_id AND t1.p_id IS NOT NULL

UNION ALL

SELECT 
    id,
    'Leaf' AS Type
FROM
    tree WHERE id NOT IN (
                                    SELECT 
                                        id
                                    FROM
                                        tree
                                    WHERE p_id IS NULL 

                                    UNION ALL 

                                    SELECT
                                        t2.p_id AS id
                                    FROM 
                                        tree t1
                                    JOIN
                                    (
                                        SELECT
                                            t2.p_id,
                                            'Inner' AS root_type
                                        FROM 
                                            tree t2
                                        GROUP BY t2.p_id
                                    )AS t2 ON t1.id = t2.p_id AND t1.p_id IS NOT NULL
                                  );