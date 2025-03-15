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

function arrayToBinaryTree(arr) {
    const tree = new BinaryTree();
    for (const val of arr) {
        tree.insert(val);
    }
    return tree;
}



// Height balanced tree
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) return null;
    return buildBalancedBST(nums, 0, nums.length - 1);
};

function buildBalancedBST(nums, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = buildBalancedBST(nums, start, mid - 1);
    root.right = buildBalancedBST(nums, mid + 1, end);
    return root;
}

// const nums = [-10,-3,0,5,9];
// const tree = sortedArrayToBST(nums);
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/





function validate(node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}

var isValidBST = function(root) {
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};


// const root = [5,1,4,null,null,3,6];
// const tree = arrayToBinaryTree(root);
// console.log(isValidBST(tree.root));
// https://leetcode.com/problems/validate-binary-search-tree/




function leftMostTraversal(root, stack) {
    while (root) {
        stack.push(root);
        root = root.left;
    }
}

var kthSmallest = function(root, k) {
    let stack = [];
    let count = 1;

    leftMostTraversal(root, stack);

    while (count < k) {
        let topNode = stack.pop();
        if (topNode.right) leftMostTraversal(topNode.right, stack);
        count++;
    }

    let result = stack.pop();
    return result.val;
};

// const root = [5,3,6,2,4,null,null,1], k = 3;
// console.log(kthSmallest(arrayToBinaryTree(root), k));
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/





var BSTIterator = function(root) {
    this.stack = [];
    this._leftMostInorder(root);
};

BSTIterator.prototype._leftMostInorder = function(root) {
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};

BSTIterator.prototype.next = function() {
    let topNode = this.stack.pop();
    if (topNode.right) {
        this._leftMostInorder(topNode.right);
    }
    return topNode.val;
};


BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

// const iter = new BSTIterator(arrayToBinaryTree([7, 3, 15, null, null, 9, 20]));
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.hasNext());
// console.log(iter.next());
// console.log(iter.hasNext());
// console.log(iter.next());
// console.log(iter.hasNext());
// console.log(iter.next());
// console.log(iter.hasNext());

// https://leetcode.com/problems/binary-search-tree-iterator/