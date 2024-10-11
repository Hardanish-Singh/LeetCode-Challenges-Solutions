-- Leetcode: https://leetcode.com/problems/get-highest-answer-rate-question/

SELECT  
        question_id AS survey_log 
FROM 
( 
    SELECT 
       a / (
                SELECT 
                    COUNT(s2.action) 
                FROM 
                    survey_log s2 
                WHERE s2.action = 'show' 
                AND s2.question_id = x.question_id 
                GROUP BY 
                    s2.question_id 
            ) AS ans,
       question_id
    FROM 
    (
        SELECT
            COUNT(s1.action) AS a,
            question_id
        FROM
            survey_log s1
        WHERE s1.action = 'answer'
        GROUP BY s1.question_id
    ) AS x
    GROUP BY question_id
) AS xx 
ORDER BY ans DESC 
LIMIT 1
