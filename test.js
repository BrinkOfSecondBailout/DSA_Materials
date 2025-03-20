class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
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
        console.log("Inorder Traversal (Left, Root, Right):");
        this.inorder(this.root);
        console.log("\nPreorder Traversal (Root, Left, Right):");
        this.preorder(this.root);
        console.log("\nPostorder Traversal (Left, Right, Root):");
        this.postorder(this.root);
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log(node.val);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node) {
            console.log(node.val);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.val);
        }
    }
}

function printInorder(node) {
    if (node) {
        printInorder(node.left);
        console.log(node.val);
        printInorder(node.right);
    }
}

function arrayToBinaryTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
        const curr = queue.shift();
        if (i < arr.length && arr[i] !== null) {
            curr.left = new TreeNode(arr[i]);
            queue.push(curr.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            curr.right = new TreeNode(arr[i]);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
}


