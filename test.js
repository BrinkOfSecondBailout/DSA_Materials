function linkedListToArray(head) {
    if (!head) return null;
    let curr = head;
    let array = [];
    while (curr) {
        array.push(curr.val);
        curr = curr.next;
    }
    return array;
}

function arrayToLinkedList(array) {
    if (array.length === 0) return null;
    let head = new ListNode(array[0]);
    let curr = head;
    for (let i = 1; i < array.length; i++) {
        let node = new ListNode(array[i]);
        curr.next = node;
        curr = curr.next;
    }
    return head;
}

function mergeSort(array) {
    let length = array.length;
    if (length <= 1) return;

    let middle = Math.floor(length / 2);
    let leftArray = new Array(middle);
    let rightArray = new Array(length - middle);

    let i = 0;
    let j = 0;
    for (; i < length; i++) {
        if (i < middle) {
            leftArray[i] = array[i];
        } else {
            rightArray[j] = array[i];
            j++;
        }
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, array);
}

function merge(leftArray, rightArray, array) {
    let leftSize = leftArray.length;
    let rightSize = array.length - leftArray.length;
    let i = 0, l = 0, r = 0;

    while (l < leftSize && r < rightSize) {
        if (leftArray[l] < rightArray[r]) {
            array[i] = leftArray[l];
            l++;
            i++;
        } else {
            array[i] = rightArray[r];
            r++;
            i++;
        }
    }

    while (l < leftSize) {
        array[i] = leftArray[l];
        i++;
        l++;
    }
    while (r < rightSize) {
        array[i] = rightArray[r];
        i++;
        r++;
    }


}

var sortList = function(head) {
    mergeSort(head);
    return head;
};

let head = [4,2,1,3];
console.log(sortList(head));
// https://leetcode.com/problems/sort-list/