var numberOfCleanRooms = function( room ) {
        const direction = {
                "right": "down",
                "down": "left",
                "left": "top",
                "top": "right"
        }
        let currentDirection = "right";
        let i = 0;
        let j = 0;
        let noOfCellsRobotCleaned = 0;
        let isCleaned = false;
        let visitedPositions = [];


        while( true ) {
                // BREAK WHEN POSITION IS VISITED WITH SAME DIRECTION
                for( let m = 0; m < visitedPositions.length; m++ ){
                        if( 
                                visitedPositions[m] === i + "," + j + "," + currentDirection
                        ) {
                                isCleaned = true;
                                break;
                        }
                }
                if( isCleaned ) {
                        break;
                }

                visitedPositions.push( i + "," + j + "," + currentDirection );

                //MOVE RIGHT
                if( currentDirection == "right" ) {
                        if( room[i][j] != 2 ) {
                                noOfCellsRobotCleaned++;
                        }
                        room[i][j] = 2;
                        j = j + 1;
                        //OUT OF GRID OR ROTATE 90 deg CLOCKWISE
                        if( j == room[i].length || room[i][j] == 1 ) {
                                j = j - 1;
                                //ROTATE 90 deg CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }

                //MOVE DOWN
                else if( currentDirection == "down" ) {
                        if( room[i][j] != 2 ) {
                                noOfCellsRobotCleaned++;
                        }
                        room[i][j] = 2;
                        i = i + 1;
                        //OUT OF GRID OR ROTATE 90 deg CLOCKWISE
                        if( i == room.length || room[i][j] == 1 ) {
                                i = i - 1;
                                //ROTATE 90 deg CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }

                //MOVE LEFT
                else if( currentDirection == "left" ) {
                        if( room[i][j] != 2 ) {
                                noOfCellsRobotCleaned++;
                        }
                        room[i][j] = 2;
                        j = j - 1;
                        //OUT OF GRID OR ROTATE 90 deg CLOCKWISE
                        if( j < 0 ||  room[i][j] == 1 ) {
                                j = j + 1;
                                //ROTATE 90 deg CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }

                else if( currentDirection == "top" ) {
                        if( room[i][j] != 2 ) {
                                noOfCellsRobotCleaned++;
                        }
                        room[i][j] = 2;
                        i = i - 1;
                        //OUT OF GRID OR ROTATE 90 deg CLOCKWISE
                        if( i < 0 || room[i][j] == 1 ) {
                                i = i + 1;
                                //ROTATE 90 deg CLOCKWISE
                                currentDirection = direction[currentDirection];
                        }
                }
        }

        return noOfCellsRobotCleaned;
};

