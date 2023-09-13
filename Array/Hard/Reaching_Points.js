/*
  SOLUTION 1
    Bottom up approach - from x2, y2 climb up to x1, y1
    1) From (x, y) we can move to (x, x+y) or (x+y, y) ( This will give TLE due to exhaustive search )
    2) Better Approach: from x2, y2 climb up to x1, y1, they key difference is to subtract bigger number from smaller number to avoid negative  number
*/
var reachingPoints = (x1, y1, x2, y2) => {
    if (x1 == x2 && y1 == y2) {
        return true;
    }

    while (x2 > x1 && y2 > y1) {
        if (y2 > x2) {
            y2 -= x2;
        } else if (x2 > y2) {
            x2 -= y2;
        }
        // Both x2, y2 are equal
        else {
            // Either subtract x2 -= y2;
            x2 -= y2;
            // or subtract y2 -= x2;
            // y2 -= x2;
        }
    }

    if (x1 == x2 && y1 == y2) {
        return true;
    }

    if (x1 == x2 && y1 < y2 && (y2 - y1) % x1 == 0) {
        return true;
    }

    if (y1 == y2 && x1 < x2 && (x2 - x1) % y1 == 0) {
        return true;
    }

    return false;
};
