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

var addTwoNumbers = function(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    let result = null;
    let remainder = 0, digit = 0;

    while (curr1 || curr2) {
        sum = (curr1.data ? curr1.data : 0) + (curr2.data ? curr2.data : 0) + remainder;
        digit = sum % 10;
        remainder = Math.floor(sum / 10);
        result = insertAtEnd(result, digit);
        curr1 = curr1.next ? curr1.next : 0;
        curr2 = curr2.next ? curr2.next : 0;
    }
    if (remainder > 0) insertAtEnd(result, remainder);
    return result;
};


// const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];
// const list1 = arrayToLinkedList(l1), list2 = arrayToLinkedList(l2);
// display(addTwoNumbers(list1, list2));
// https://leetcode.com/problems/add-two-numbers/




var removeNthFromEnd = function(head, n) {
    let prev = null, curr = head, count = 0, target = 0;
    while (curr) {
        count++;
        curr = curr.next;
    }
    if (count <= 1) return null;
    if (count === n) return head.next;
    target = count - n + 1;

    curr = head;
    for (let i = 1; i < target; i++) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next;
    return head;
};

// const head = arrayToLinkedList([1,2,3,4,5]), n = 2;
// display(removeNthFromEnd(head, n));
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/