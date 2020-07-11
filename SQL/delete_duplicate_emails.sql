/*
    Table: Person

                +-------------+---------+
                | Column Name | Type    |
                +-------------+---------+
                | Id          | int     |
                | Email       | varchar |
                +-------------+---------+
                
                Id is the primary key column for this table.
    
    Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
    Note: Your output is the whole Person table after executing your sql. Use delete statement.
*/
DELETE FROM PERSON  
WHERE id IN (
                SELECT 
                        * 
                FROM
                (
                    SELECT 
                            id 
                    FROM 
                            PERSON
                    WHERE email IN (
                                    SELECT 
                                            email
                                    FROM 
                                            PERSON
                                    GROUP BY email
                                    HAVING COUNT(*) > 1
                                   )
                    AND id NOT IN (
                                    SELECT 
                                            MIN(id)
                                    FROM 
                                            PERSON
                                    GROUP BY email
                                    HAVING COUNT(*) > 1
                                  )
                )AS x
            );