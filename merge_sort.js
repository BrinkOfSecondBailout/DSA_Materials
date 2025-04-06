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

// let head = [4,2,1,3];
// console.log(sortList(head));
// https://leetcode.com/problems/sort-list/





function merge(leftArray, rightArray, array) {
    let leftSize = leftArray.length;
    let rightSize = rightArray.length;
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
        l++;
        i++;
    }

    while (r < rightSize) {
        array[i] = rightArray[r];
        r++;
        i++;
    }
}

function mergeSort(array) {
    let n = array.length;
    if (n <= 1) return;

    let middle = Math.floor(n / 2);
    let leftArray = new Array(middle);
    let rightArray = new Array(n - middle);
    let i = 0, j = 0;

    for (; i < n; i++) {
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

var sortArray = function(nums) {
    mergeSort(nums);
    return nums;
};

// let nums = [5,2,3,1];
// console.log(sortArray(nums));
// https://leetcode.com/problems/sort-an-array/description/






function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function display(root) {
    if (root === null) console.log("null");
    while (root !== null) {
        console.log(root.val);
        root = root.next;
    }
}

function linkedListToArray(array, node) {
    let curr = node;
    while (curr !== null) {
        array.push(curr.val);
        curr = curr.next;
    }
    return array;
}

function merge(leftArray, rightArray, array) {
    let i = 0, l = 0, r = 0;

    while (l < leftArray.length && r < rightArray.length) {
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

    while (l < leftArray.length) {
        array[i] = leftArray[l];
        i++;
        l++;
    }
    while (r < rightArray.length) {
        array[i] = rightArray[r];
        i++;
        r++;
    }
}

function mergeSort(array) {
    let n = array.length;
    if (n === 0) return null;
    if (n === 1) return new ListNode(array[0]);

    let middle = Math.floor(n / 2);
    let leftArray = new Array(middle);
    let rightArray = new Array(n - middle);
    let l = 0, r = 0;
    for (let i = 0; i < array.length; i++) {
        if (i < middle) {
            leftArray[l] = array[i];
            l++;
        } else {
            rightArray[r] = array[i];
            r++;
        }
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, array);

    let head = new ListNode(array[0]);
    let curr = head;
    for (let i = 1; i < array.length; i++) {
        let newNode = new ListNode(array[i]);
        curr.next = newNode;
        curr = curr.next;
    }
    return head;
}

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    let array = [];
    for (let i = 0; i < lists.length; i++) {
        linkedListToArray(array, lists[i]);
    }
    return mergeSort(array);
};

function linkedListify(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++)  {
        let head = new ListNode(matrix[i][0]);
        let curr = head;
        for (let j = 1; j < matrix[i].length; j++) {
            let newNode = new ListNode(matrix[i][j]);
            curr.next = newNode;
            curr = curr.next;
        }
        result.push(head);
    }
    return result;
}

// let lists = linkedListify([[1,4,5],[1,3,4],[2,6]]);
// display(mergeKLists(lists));
// https://leetcode.com/problems/merge-k-sorted-lists/




function linkedListify(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++)  {
        let head = new ListNode(matrix[i][0]);
        let curr = head;
        for (let j = 1; j < matrix[i].length; j++) {
            let newNode = new ListNode(matrix[i][j]);
            curr.next = newNode;
            curr = curr.next;
        }
        result.push(head);
    }
    return result;
}

function display(root) {
    if (root === null) console.log("null");
    while (root !== null) {
        console.log(root.val);
        root = root.next;
    }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return dummy.next;
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    while (lists.length > 1) {
        const mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedList.push(mergeTwoLists(l1, l2));
        }
        lists = mergedList;
    }
    return lists[0];
}

let lists = linkedListify([[1,4,5],[1,3,4],[2,6]]);
display(mergeKLists(lists));
// https://leetcode.com/problems/merge-k-sorted-lists/






function merge(array, left, right) {
    let i = 0, l = 0, r = 0;
    while(l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            array[i] = left[l];
            l++;
        } else {
            array[i] = right[r];
            r++;
        }
        i++;
    }
    while (l < left.length) {
        array[i] = left[l];
        l++;
        i++;
    }
    while (r < right.length) {
        array[i] = right[r];
        r++;
        i++;
    }
}

function mergeSort(array) {
    if (array.length <= 1) return;

    let leftArray = [];
    let rightArray = [];

    let mid = Math.floor(array.length / 2);
    let l = 0, r = mid;
    while (l < mid) {
        leftArray.push(array[l]);
        l++;
    }
    while (r < array.length) {
        rightArray.push(array[r]);
        r++;
    }

    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(array, leftArray, rightArray);
}

function sort(array) {
    mergeSort(array);
    return array;
}

let array = [12, 7, 0, 4, 2, 15, 48, 100, 24, 42, 59, 11, 8, 13, 55];
console.log(sort(array));