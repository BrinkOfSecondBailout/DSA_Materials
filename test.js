class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtEnd(root, item) {
    const temp = new Node(item);
    if (root == null) {
        return temp;
    }
    let curr = root;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = temp;
    return root;
}

function arrayToLinkedList(arr) {
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = insertAtEnd(root, arr[i]);
    }
    return root;
}

function linkedListToArray(root) {
    let arr = [];
    let curr = root;
    while(curr) {
        arr.push(curr.data);
        curr = curr.next;
    }
    return arr;
}

function display(root) {
    if (root === null) console.log("null");
    while (root !== null) {
        console.log(root.data);
        root = root.next;
    }
}

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


const root = [7,2,5,3,4,6];
const tree = arrayToBinaryTree(root);
tree.display();