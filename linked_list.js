// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

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

// function arrayToLinkedList(arr) {
//     let root = null;
//     for (let i = 0; i < arr.length; i++) {
//         root = insertAtEnd(root, arr[i]);
//     }
//     return root;
// }

// function linkedListToArray(root) {
//     let arr = [];
//     let curr = root;
//     while(curr) {
//         arr.push(curr.data);
//         curr = curr.next;
//     }
//     return arr;
// }

// function display(root) {
//     if (root === null) console.log("null");
//     while (root !== null) {
//         console.log(root.data);
//         root = root.next;
//     }
// }

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





var hasCycle = function(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};

// const head = [3,2,0,-4], pos = 1;
// console.log(hasCycle(arrayToLinkedList(head)));
// https://leetcode.com/problems/linked-list-cycle/description/






// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// function turnArrayToList(array) {
//     let dummy = new ListNode(0);
//     let curr = dummy;
//     for (const num of array) {
//         let newNode = new ListNode(num);
//         curr.next = newNode;
//         curr = curr.next;
//     }
//     return dummy.next;
// }

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
// https://leetcode.com/problems/reverse-nodes-in-k-group/description/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

function countNodes(node) {
    if (node === null) return 0;
    let count = 0;
    while (node) {
        count++;
        node = node.next;
    }
    return count;
}

var reorderList = function(head) {
    let curr = head;
    let slow = curr, fast = curr.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let second = slow.next;
    prev = null;
    slow.next = null;

    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    first = head;
    second = prev;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};

// const head = arrayToList([1,2,3,4]);
// reorderList(head);
// console.log(head);
// https://leetcode.com/problems/reorder-list/description/?envType=problem-list-v2&envId=oizxjoit


// Brute force
// var maxProduct = function(nums) {
//     if (nums.length === 0) return 0;
//     let max = -Infinity;

//     for (let left = 0; left < nums.length; left++) {
//         let currTotal = nums[left];
//         max = Math.max(max, currTotal);
//         for (let right = left + 1; right < nums.length; right++) {
//             currTotal *= nums[right];
//             max = Math.max(max, currTotal);
//         }
//     }
//     return max;
// };

function maxProduct(nums) {
    let result = Math.max(...nums);
    let currMin = currMax = 1;
    for (const num of nums) {
        let temp = currMax;
        currMax = Math.max(num * currMax, num * currMin, num);
        currMin = Math.min(num * temp, num * currMin, num);
        result = Math.max(result, currMax, currMin);
    }
    return result;
}

// const nums = [2,3,-2,4];
// console.log(maxProduct(nums));
// https://leetcode.com/problems/maximum-product-subarray/description/?envType=problem-list-v2&envId=oizxjoit

var getSum = function(a, b) {
    while (b !== 0) {
        let temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
    }
    return a;
};

// const a = 1, b = 2;
// console.log(getSum(a, b));
// https://leetcode.com/problems/sum-of-two-integers/description/?envType=problem-list-v2&envId=oizxjoit



var middleNode = function(head) {
    if (head === null) return null;
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

// const head = arrayToList([1,2,3,4,5,6]);
// console.log(middleNode(head));
// https://leetcode.com/problems/middle-of-the-linked-list/




var deleteMiddle = function(head) {
    if (head === null || head.next === null) return null;
    let prev = slow = fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
    return head;
};

// const head = arrayToList([1]);
// console.log(deleteMiddle(head));
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/





var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }
};


// const nums = [0,1,0,3,12];
// moveZeroes(nums);
// console.log(nums);
// https://leetcode.com/problems/move-zeroes/




var subsets = function(nums) {
    let result = [], sub = [];
    let n = nums.length;

    function backtrack(i) {
        if (i === n) {
            result.push([...sub]);
            return;
        }
        backtrack(i + 1);
        sub.push(nums[i]);
        backtrack(i + 1);
        sub.pop();
    }

    backtrack(0);
    return result;
};

// const nums = [1,2,3];
// console.log(subsets(nums));
// https://leetcode.com/problems/subsets/






var combinationSum = function(candidates, target) {
    let result = [], sub = [];
    let n = candidates.length;
    function dfs(i, currSum) {
        if (currSum === target) {
            result.push([...sub]);
            return;
        }
        if (currSum > target || i === n) {
            return;
        }

        dfs(i + 1, currSum );

        sub.push(candidates[i]);
        dfs(i, currSum + candidates[i]);
        sub.pop();
    }
    dfs(0, 0);
    return result;
};

// const candidates = [2,3,6,7], target = 7;
// console.log(combinationSum(candidates, target));
// https://leetcode.com/problems/combination-sum/