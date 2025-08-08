function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function merge(array, left, right) {
    let i = 0, l = 0, r = 0;
    while (l < left.length && r < right.length) {
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
        i++;
        l++;
    }
    while (r < right.length) {
        array[i] = right[r];
        i++;
        r++;
    }
    return array;
}

function mergeSort(array) {
    let n = array.length;
    if (n <= 1) return array;
    let mid = Math.floor(n / 2);
    return merge(array, mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid, n)));
}

function sort(array) {
    mergeSort(array);
}


let array = [8, 2, 5, 3, 9, 4, 7, 6, 1];
sort(array);
console.log(array);





