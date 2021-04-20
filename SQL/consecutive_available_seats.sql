/*
        SQL Schema
        
        Several friends at a cinema ticket office would like to reserve consecutive available seats.
        Can you help to query all the consecutive available seats order by the seat_id using the following cinema table?
        | seat_id | free |
        |---------|------|
        | 1       | 1    |
        | 2       | 0    |
        | 3       | 1    |
        | 4       | 1    |
        | 5       | 1    |
        

        Your query should return the following result for the sample case above.
        

        | seat_id |
        |---------|
        | 3       |
        | 4       |
        | 5       |
        
        Note:
                The seat_id is an auto increment int, and free is bool ('1' means free, and '0' means occupied.).
                Consecutive available seats are more than 2(inclusive) seats consecutively available.

*/
SELECT
    *
FROM
(
    SELECT  
            CASE WHEN is_consecutive = 1 THEN seat_id-1
            END AS seat_id
    FROM
    (
            SELECT  
                    *,
                    CASE WHEN free = previous_seat AND free != 0 THEN @rn := @rn + 1
                    ELSE @rn := 0
                    END AS is_consecutive
            FROM 
            (
                    SELECT 
                            *,
                            LAG(free) OVER (
                                    ORDER BY seat_id
                            ) AS previous_seat,
                            (SELECT @rn := 0) AS rn
                    FROM 
                            cinema
            )AS SubQuery1
    )AS SubQuery2
    WHERE SubQuery2.is_consecutive = 1

    UNION ALL 

    SELECT  
            seat_id
    FROM
    (
            SELECT  
                    *,
                    CASE WHEN free = previous_seat AND free != 0 THEN @rn := @rn + 1
                    ELSE @rn := 0
                    END AS is_consecutive
            FROM 
            (
                    SELECT 
                            *,
                            LAG(free) OVER (
                                    ORDER BY seat_id
                            ) AS previous_seat,
                            (SELECT @rn := 0) AS rn
                    FROM 
                            cinema
            )AS SubQuery1
    )AS SubQuery2
    WHERE SubQuery2.is_consecutive >= 1
)AS MainQuery
ORDER BY MainQuery.seat_id;