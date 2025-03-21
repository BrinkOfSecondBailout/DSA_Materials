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





function generateBST(start, end) {
    const result = [];
    if (start > end) {
        result.push(null);
        return result;
    }

    for (let i = start; i <= end; i++) {
        let leftTrees = generateBST(start, i - 1);
        let rightTrees = generateBST(i + 1, end);
        for (let leftTree of leftTrees) {
            for (let rightTree of rightTrees) {
                const root = new TreeNode(i);
                root.left = leftTree;
                root.right = rightTree;
                result.push(root);
            }
        }
    }
    return result;
}

var generateTrees = function(n) {
    if (n === 0) return [];
    return generateBST(1, n);
};

// const n = 3;
// console.log(generateTrees(n));
// https://leetcode.com/problems/unique-binary-search-trees-ii/






var numTrees = function(n) {
    // dp[i] represents the number of unique BSTs with i nodes
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    // Build dp array for each number of nodes from 2 to n
    for (let nodes = 2; nodes <= n; nodes++) {
        // For each i as the root, calculate left and right subtrees
        for (let i = 0; i < nodes; i++) {
            let left = i; // Nodes in left subtree
            let right = nodes - 1 - i; // Nodes in right subtree
            dp[nodes] += dp[left] * dp[right]; // Multiply possibilities
        }
    }

    return dp[n];
};

// console.log(numTrees(3));
// https://leetcode.com/problems/unique-binary-search-trees/





var recoverTree = function(root) {
    let first = null, second = null, prev = null;

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        if (prev && node.val < prev.val) {
            if (!first) {
                first = prev;
            }
            second = node;
        }
        prev = node;
        inorder(node.right);
    }

    inorder(root);

    if (first && second) {
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
    } else {
        console.log("Already in order, no fix needed.");
    }
};
// const rootArr = [1,3,null,null,2];
// let treeRoot = arrayToBinaryTree(rootArr);
// recoverTree(treeRoot);
// printInorder(treeRoot);
// https://leetcode.com/problems/recover-binary-search-tree/description/







class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
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

function buildBalancedBST(arr, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(arr[mid]);

    root.left = buildBalancedBST(arr, start, mid - 1);
    root.right = buildBalancedBST(arr, mid + 1, end);
    return root;
}

var sortedListToBST = function(head) {
    let arr = linkedListToArray(head);
    if (arr.length === 0) return null;
    return buildBalancedBST(arr, 0, arr.length - 1);
};

// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/



function findAncestor(root, p, q) {
    if (root.val === null) return null;

    if (p.val > root.val && q.val > root.val) {
        return findAncestor(root.right, p, q);
    }
    if (p.val < root.val && q.val < root.val) {
        return findAncestor(root.left, p, q);
    } 
    return root;
}

var lowestCommonAncestor = function(root, p, q) {
    return findAncestor(root, p, q);
};

// const root = arrayToBinaryTree([6,2,8,0,4,7,9,null,null,3,5]);
// const p = 2, q = 8; 
// console.log(lowestCommonAncestor(root, p, q));
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/




function findMin(node) {
    while (node && node.left) {
        node = node.left;
    }
    return node;
}

var deleteNode = function(root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
};


// const root = arrayToBinaryTree([5,3,6,2,4,null,7]), key = 3;
// deleteNode(root, key);
// https://leetcode.com/problems/delete-node-in-a-bst/




function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val);
    if (!root) return newNode;

    let curr = root;
    while (true) {
        if (val < curr.val) {
            if (!curr.left) {
                curr.left = newNode;
                break;
            }
            curr = curr.left;
        } else if (val > curr.val) {
            if (!curr.right) {
                curr.right = newNode;
                break;
            }
            curr = curr.right;
        }
    }
    return root;
};

// const root = arrayToBinaryTree([4,2,7,1,3]), val = 5;
// console.log(printPreorder(insertIntoBST(root, val)));
// https://leetcode.com/problems/insert-into-a-binary-search-tree/