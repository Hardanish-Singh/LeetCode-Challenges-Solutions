// Leetcode: https://leetcode.com/problems/check-if-it-is-a-straight-line/

const checkStraightLine = (coordinates: number[][]): boolean => {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        // Calculate the cross product of vectors (x2-x1, y2-y1) and (x-x1, y-y1)
        if ((x2 - x1) * (y - y1) !== (x - x1) * (y2 - y1)) {
            return false; // Points are not collinear
        }
    }

    return true; // All points are collinear
};
