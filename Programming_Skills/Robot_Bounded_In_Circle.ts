const isRobotBounded = (directions: string): boolean => {
    let x = 0;
    let y = 0;
    directions = directions.repeat(4); // repeat four times to make sure if a round exists
    let currentDirection = "N";
    for (const direction of directions) {
        if (direction === "G") {
            switch (currentDirection) {
                case "N":
                    y++;
                    break;
                case "S":
                    y--;
                    break;
                case "E":
                    x++;
                    break;
                case "W":
                    x--;
                    break;
                default:
                    throw new Error("Direction not found");
            }
        } else {
            currentDirection = turn(currentDirection, direction);
        }
    }
    return x == 0 && y == 0;
};

const turn = (currentDirection: string, direction: string): string => {
    switch (currentDirection) {
        case "N":
            return direction === "L" ? "W" : "E";
        case "W":
            return direction == "L" ? "S" : "N";
        case "S":
            return direction == "L" ? "E" : "W";
        case "E":
            return direction == "L" ? "N" : "S";
        default:
            throw new Error("Direction not found");
    }
};
