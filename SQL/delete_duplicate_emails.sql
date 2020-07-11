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