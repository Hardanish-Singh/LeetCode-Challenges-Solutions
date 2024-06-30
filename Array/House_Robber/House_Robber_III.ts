// Leetcode: https://leetcode.com/problems/house-robber-iii/

class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

type T = TreeNode | null | undefined;

const grandChildren = (root: T): T[] => {
    if (!root) {
        return [];
    }
    return [root.left?.left, root.left?.right, root.right?.left, root.right?.right].filter(Boolean);
};

// Solution 1: Recursion (TLE)
var rob1 = (root: T): number => {
    if (!root) {
        return 0;
    }

    let max = Math.max(
        grandChildren(root).reduce((accumulator, child) => accumulator + rob1(child), root.val),
        rob1(root.left) + rob1(root.right)
    );

    return max;
};

// Solution 2: Recursion with Memoization / Caching
var rob2 = (root: T, map: Map<TreeNode, number> = new Map()) => {
    if (!root) {
        return 0;
    }
    if (map.has(root)) {
        return map.get(root) as number;
    }

    let max = Math.max(
        grandChildren(root).reduce((accumulator, child) => accumulator + rob2(child, map), root.val),
        rob2(root.left, map) + rob2(root.right, map)
    );
    map.set(root, max);
    return max;
};
