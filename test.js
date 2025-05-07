function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        swap(arr, largest, i);
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }
}

function insertNode(arr, val) {
    arr.push(val);
    heapSort(arr);
}

function popMin(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr.pop();
    const min = arr[0];
    arr[0] = arr.pop();
    heapSort(arr);
    return min;
}

const arr = [12, 5, 3, 45, 9, 10, 24, 51, 100, 1, 0];
heapSort(arr);
console.log(arr);
insertNode(arr, 7);
console.log(arr);
console.log(popMin(arr));
console.log(arr);