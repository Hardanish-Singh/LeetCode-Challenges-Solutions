/*
    Get the highest answer rate question from a table survey_log with these columns: id, action, question_id, answer_id, q_num, timestamp.

    id means user id; 
    action has these kind of values: "show", "answer", "skip"; 
    answer_id is not null when action column is "answer", while is null for "show" and "skip"; 
    q_num is the numeral order of the question in current session.

    Write a sql query to identify the question which has the highest answer rate.

    Example:

    Input:
    +------+-----------+--------------+------------+-----------+------------+
    | id   | action    | question_id  | answer_id  | q_num     | timestamp  |
    +------+-----------+--------------+------------+-----------+------------+
    | 5    | show      | 285          | null       | 1         | 123        |
    | 5    | answer    | 285          | 124124     | 1         | 124        |
    | 5    | show      | 369          | null       | 2         | 125        |
    | 5    | skip      | 369          | null       | 2         | 126        |
    +------+-----------+--------------+------------+-----------+------------+
    
    Output:
    +-------------+
    | survey_log  |
    +-------------+
    |    285      |
    +-------------+
    
    Explanation:
    question 285 has answer rate 1/1, while question 369 has 0/1 answer rate, so output 285.
*/
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
