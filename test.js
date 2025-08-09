// function merge(left, right) {
//     console.log(left, right);
//     let l = 0, r = 0, i = 0;
//     let array = [];
//     while (l < left.length && r < right.length) {
//         if (left[l] < right[r]) {
//             array[i] = left[l];
//             l++;
//             i++
//         } else {
//             array[i] = right[r];
//             r++;
//             i++;
//         }
//     }
//     while (l < left.length) {
//         array[i] = left[l];
//         i++;
//         l++;
//     }
//     while (r < right.length) {
//         array[i] = right[r];
//         i++;
//         r++;
//     }
//     return array;
// }

// function merge_sort(array) {
//     console.log(array);
//     if (array.length == 1) return array;
//     let mid = Math.floor(array.length / 2);
//     let left = merge_sort(array.slice(0, mid));
//     let right = merge_sort(array.slice(mid, array.length));
    
//     return merge(left, right);
// }

// function sort(array) {
//     return merge_sort(array);
// }






// function swap(array, i, j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }

// function heapify(array, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
//     if (left < n && array[left] > array[largest]) {
//         largest = left;
//     }
//     if (right < n && array[right] > array[largest]) {
//         largest = right;
//     }
//     if (largest !== i) {
//         swap(array, largest, i);
//         heapify(array, n, largest);
//     }

// }

// function heap_sort(array) {
//     let n = array.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(array, n, i);
//     }
    
//     for (let i = n - 1; i > 0; i--) {
//         swap(array, i, 0);
//         heapify(array, i, 0);
//     }
//     return array;
// }

// function sort(array) {
//     return heap_sort(array);
// }


function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, start, end) {
    let j = start - 1, i = start;
    while (i < end) {
        if (array[i] < array[end]) {
            j++;
            swap(array, j, i);
        }
        i++;
    }
    j++;
    swap(array, j, end);
    return j;
}

function quick_sort(array, start, end) {
    if (start >= end) return;
    let pivot = partition(array, start, end);
    quick_sort(array, start, pivot - 1);
    quick_sort(array, pivot + 1, end);
    return array;
}

function sort(array) {
    return quick_sort(array, 0, array.length);
}


let array = [20, 12, 8, 24, 16, 30, 1, 5];
console.log(sort(array));
