function quickSort(array, start, end) {
    if (end <= start) return;

    let pivot = partition(array, start, end);

    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
}

function partition(array, start, end) {
    let i = start - 1;
    let j = start;
    let pivot = array[end];

    while (j < end) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
        j++;
    }
    i++;
    [array[i], array[end]] = [array[end], array[i]];
    return i;
}

function sort(array) {
    return quickSort(array, 0, array.length - 1);
}

let array = [8, 2, 5, 3, 9, 4, 7, 6, 1];
sort(array);
console.log(array);

