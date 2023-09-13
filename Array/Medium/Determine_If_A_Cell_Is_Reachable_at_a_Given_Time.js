// Leetcode: https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/

// SOLUTION 1
var isReachableAtTime = (x1, y1, x2, y2, time) => {
    if (x1 === x2 && y1 === y2 && time === 1) {
        return false;
    }

    let xDiff = Math.abs(x1 - x2);
    let yDiff = Math.abs(y1 - y2);

    let diagonalDifference = Math.min(xDiff, yDiff);
    let straightLineMovement = Math.max(xDiff, yDiff) - diagonalDifference;

    let shortestTime = diagonalDifference + straightLineMovement;

    return time >= shortestTime;
};

// SOLUTION 2
var isReachableAtTime = (x1, y1, x2, y2, time) => {
    if (x1 === x2 && y1 === y2 && time === 1) {
        return false;
    }

    let diagonalDistance = 0;

    if (x2 > x1 && y2 > y1) {
        while (x2 > x1 && y2 > y1) {
            x1++;
            y1++;
            diagonalDistance++;
        }
    } else if (x2 > x1 && y2 < y1) {
        while (x2 > x1 && y2 < y1) {
            x1++;
            y1--;
            diagonalDistance++;
        }
    } else if (x2 < x1 && y2 < y1) {
        while (x2 < x1 && y2 < y1) {
            x1--;
            y1--;
            diagonalDistance++;
        }
    } else if (x2 < x1 && y2 > y1) {
        while (x2 < x1 && y2 > y1) {
            x1--;
            y1++;
            diagonalDistance++;
        }
    }

    let straightLineMovement = 0;
    if (y1 === y2) {
        straightLineMovement = Math.abs(x2 - x1);
    } else if (x1 === x2) {
        straightLineMovement = Math.abs(y2 - y1);
    }

    let shortestTime = diagonalDistance + straightLineMovement;

    return time >= shortestTime;
};
