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




var rotateRight = function(head, k) {
    if (head === null) return null;
    let prev = null, curr = null, oldHead = null, newHead = null, count = 0;
    oldHead = head;
    curr = head;

    while(curr) {
        count++;
        curr = curr.next;
    }
    if (k > count) k = k % count;
    if (k === count || k === 0 || count === 1) return oldHead;

    location = count - k;
    curr = head;
    for (let i = 0; i < location; i++) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = null;
    newHead = curr;
    while(curr.next) {
        curr = curr.next;
    }
    curr.next = oldHead;

    return newHead;
};

// const head = [1,2,3,4,5], k = 10;
// display(rotateRight(arrayToLinkedList(head), k));
// https://leetcode.com/problems/rotate-list/submissions/1571950860/





var deleteDuplicates = function(head) {
    if (head == null) return null;
    if (head.next == null) return head;
    
    let prev = null, newHead = null, curr = head;
    while (curr) {
        if (curr.next && curr.data !== curr.next.data) { // No removal needed
            if (newHead == null) newHead = curr;
            prev = curr;
            curr = curr.next;
        } else if (curr.next && curr.data === curr.next.data) { // Removal needed
            while (curr.next && curr.data === curr.next.data) {
                curr = curr.next;
            }
            if (curr.next) {
                if (prev != null) {
                    prev.next = curr.next;
                }
                curr = curr.next;
            }
        } else {
            break;
        }
    }
    return newHead;
};

// const head = [1,2,3,3,4,4,5];
// display(deleteDuplicates(arrayToLinkedList(head)));
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/




var partition = function(head, x) {
    if (head == null) return null;

    let leftHead = null, leftTail = null, rightHead = null, rightTail = null, curr = head;

    while (curr) {
        if (curr.data < x) { // Left partition
            if (leftHead == null) leftHead = curr;
            if (leftTail != null) {
                leftTail.next = curr;
            }
            leftTail = curr;
        } else { // Right partition
            if (rightHead == null) rightHead = curr;
            if (rightTail != null) {
                rightTail.next = curr;
            }
            rightTail = curr;
        }
        curr = curr.next;
    }
    if (leftTail != null) {
        leftTail.next = rightHead; // Only set if leftTail exists
    }
    if (rightTail != null) {
        rightTail.next = null; // Ensure the end of the list is null
    }
    return leftHead != null ? leftHead : rightHead;
};

// const head = [1,4,3,2,5,2], x = 3;
// display(partition(arrayToLinkedList(head), x));
// https://leetcode.com/problems/partition-list/



var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let prev = null, curr = head, position = 1;

    while (position < left) {
        prev = curr;
        curr = curr.next;
        position++;
    }

    let sectionPrev = prev;
    let sectionTail = curr;

    while (position <= right) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        position++;
    }

    sectionPrev.next = prev;
    sectionTail.next = curr;
    return head;
};


// const head = [1,2,3,4,5], left = 2, right = 4;
// display(reverseBetween(arrayToLinkedList(head), left, right));
// https://leetcode.com/problems/reverse-linked-list-ii/description/



var reverseList = function(head) {
    let prev = null, temp = null, curr = head;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// head = [1,2];
// display(reverseList(arrayToLinkedList(head)));
// https://leetcode.com/problems/reverse-linked-list/