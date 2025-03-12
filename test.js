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
        console.log(root.data + " ");
        root = root.next;
    }
}

