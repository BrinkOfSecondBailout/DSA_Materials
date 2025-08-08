function merge(left, right) {
    let l = 0, r = 0, i = 0;
    let array = [];
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            array[i] = left[l];
            l++;
            i++
        } else {
            array[i] = right[r];
            r++;
            i++;
        }
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

function merge_sort(array) {
    if (array.length == 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = merge_sort(array.slice(0, mid));
    let right = merge_sort(array.slice(mid, array.length));
    
    return merge(left, right);
}

function sort(array) {
    return merge_sort(array);
}

let array = [12, 7, 0, 4, 2, 15, 48, 100, 24, 42, 59, 11, 8, 13, 55];
console.log(sort(array));
