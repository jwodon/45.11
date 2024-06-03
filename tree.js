class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    sumValues() {
        if (!this.root) return 0;
        const sumValuesHelper = (node) =>
            node.val + node.children.reduce((sum, child) => sum + sumValuesHelper(child), 0);
        return sumValuesHelper(this.root);
    }

    countEvens() {
        if (!this.root) return 0;
        const countEvensHelper = (node) =>
            (node.val % 2 === 0 ? 1 : 0) + node.children.reduce((count, child) => count + countEvensHelper(child), 0);
        return countEvensHelper(this.root);
    }

    numGreater(lowerBound) {
        if (!this.root) return 0;
        const numGreaterHelper = (node) =>
            (node.val > lowerBound ? 1 : 0) +
            node.children.reduce((count, child) => count + numGreaterHelper(child), 0);
        return numGreaterHelper(this.root);
    }
}

module.exports = { Tree, TreeNode };
