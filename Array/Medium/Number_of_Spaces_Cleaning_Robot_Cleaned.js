var numberOfCleanRooms = function( room ) {
        const direction = {
                "right": "down",
                "down": "left",
                "left": "top",
                "top": "right",
        }
        const visitedPositions = {};
        let currentDirection = "right";
        let i = 0, j = 0, noOfCellsRobotCleaned = 0;

        while( true ) {
                /* 
                        WHEN THE ROBOT REACHES A SPACE/POSITION 
                        THAT IT HAS ALREADY CLEANED & IS FACING THE SAME DIRECTION AS BEFORE, 
                        WE CAN STOP THE SIMULATION.
                */
                if( visitedPositions[ i + "," + j + "," + currentDirection ] ) {
                        break;
                }
                
                visitedPositions[ i + "," + j + "," + currentDirection ] = true;
                
                if( room[i][j] != 2 ) {
                        noOfCellsRobotCleaned++;
                }
                room[i][j] = 2;

                // MOVE RIGHT
                if( currentDirection == "right" ) {
                        j = j + 1;
                        // OUT OF GRID OR ROTATE 90° CLOCKWISE
                        if( j == room[i].length || room[i][j] == 1 ) {
                                j = j - 1;
                                // ROTATE 90° CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }

                // MOVE DOWN
                else if( currentDirection == "down" ) {
                        i = i + 1;
                        // OUT OF GRID OR ROTATE 90° CLOCKWISE
                        if( i == room.length || room[i][j] == 1 ) {
                                i = i - 1;
                                // ROTATE 90° CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }

                // MOVE LEFT
                else if( currentDirection == "left" ) {
                        j = j - 1;
                        // OUT OF GRID OR ROTATE 90° CLOCKWISE
                        if( j < 0 ||  room[i][j] == 1 ) {
                                j = j + 1;
                                // ROTATE 90° CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }

                // MOVE TOP
                else if( currentDirection == "top" ) {
                        i = i - 1;
                        // OUT OF GRID OR ROTATE 90° CLOCKWISE
                        if( i < 0 || room[i][j] == 1 ) {
                                i = i + 1;
                                // ROTATE 90° CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }
        }

        return noOfCellsRobotCleaned;
};