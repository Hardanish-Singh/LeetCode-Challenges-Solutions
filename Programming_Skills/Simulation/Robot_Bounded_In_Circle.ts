// Leetcode: https://leetcode.com/problems/robot-bounded-in-circle/

const isRobotBounded = (directions: string): boolean => {
    let x = 0;
    let y = 0;
    const turnDirections = {
        N: {
            L: "W",
            R: "E",
        },
        E: {
            L: "N",
            R: "S",
        },
        S: {
            L: "E",
            R: "W",
        },
        W: {
            L: "S",
            R: "N",
        },
    };
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
            currentDirection = turnDirections[currentDirection][direction];
        }
    }
    return x == 0 && y == 0;
};
