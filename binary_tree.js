class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.val === node.val) return;
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    display() {
        this.displayNode(this.root, "");
    }

    displayNode(node, prefix) {
        if (node === null) return;

        console.log(prefix + node.val);

        if (node.left) {
            this.displayNode(node.left, prefix + "/  ");
        }

        if (node.right) {
            this.displayNode(node.right, prefix + "\\  ");
        }
    }
}

function arrayToBinaryTree(arr) {
    const tree = new BinaryTree();
    for (const val of arr) {
        tree.insert(val);
    }
    return tree;
}