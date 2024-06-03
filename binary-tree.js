class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    minDepth() {
        if (!this.root) return 0;
        const minDepthHelper = (node) => {
            if (!node) return Infinity;
            if (!node.left && !node.right) return 1;
            return 1 + Math.min(minDepthHelper(node.left), minDepthHelper(node.right));
        };
        return minDepthHelper(this.root);
    }

    maxDepth() {
        if (!this.root) return 0;
        const maxDepthHelper = (node) =>
            node ? 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) : 0;
        return maxDepthHelper(this.root);
    }

    maxSum() {
        let result = 0;
        const maxSumHelper = (node) => {
            if (!node) return 0;
            const leftSum = Math.max(0, maxSumHelper(node.left));
            const rightSum = Math.max(0, maxSumHelper(node.right));
            result = Math.max(result, node.val + leftSum + rightSum);
            return node.val + Math.max(leftSum, rightSum);
        };
        maxSumHelper(this.root);
        return result;
    }

    nextLarger(lowerBound) {
        if (!this.root) return null;
        let queue = [this.root],
            result = null;
        while (queue.length) {
            let node = queue.shift();
            if (node.val > lowerBound && (result === null || node.val < result)) result = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }
}

module.exports = { BinaryTree, BinaryTreeNode };
