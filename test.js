function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function turnArrayToList(array) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (const num of array) {
        let newNode = new ListNode(num);
        curr.next = newNode;
        curr = curr.next;
    }
    return dummy.next;
}

function countNodes(node) {
    if (node === null) return 0;
    let count = 0;
    while (node !== null) {
        count++;
        node = node.next;
    }
    return count;
}

function reverseK(start, k) {
    let prev = null, curr = start, count = 0;
    while (curr && count < k) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    return [prev, curr];
}

var reverseKGroup = function(head, k) {
    if (k === 1 || head.next === null) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = head;
    let previousGroup = dummy;
    let length = countNodes(head);
    while (length >= k) {
        let [newHead, nextGroup] = reverseK(curr, k);
        previousGroup.next = newHead;
        curr.next = nextGroup;
        previousGroup = curr;
        curr = nextGroup;
        length -= k;
    }
    return dummy.next;
};



// const head = turnArrayToList([1,2,3,4,5]), k = 2;
// reverseKGroup(head, k);











