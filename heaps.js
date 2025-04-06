function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function heapify(array, n, i) {
    let largest = i;

    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    if (leftChild < n && array[leftChild] > array[largest]) largest = leftChild;
    if (rightChild < n && array[rightChild] > array[largest]) largest = rightChild;

    if (largest !== i) {
        swap(array, i, largest);
        heapify(array, n, largest);
    }
}

function heapSort(array) {
    let n = array.length;

    for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
        heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        swap(array, 0, i);
        heapify(array, i, 0);
    }
    return array;
}

// let array = [12, 7, 0, 4, 2, 15, 48, 100, 24, 42, 59, 11, 8, 13, 55];
// console.log(heapSort(array));









var findRelativeRanks = function(score) {
    const indexedScores = score.map((s, i) => [s, i]);
    
    const heapify = (arr, n, i) => {
        let largest = i;
        // Sift down
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left][0] > arr[largest][0]) largest = left;
        if (right < n && arr[right][0] > arr[largest][0]) largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    };

    const n = indexedScores.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(indexedScores, n, i);
    }

    const result = new Array(n);
    const rankMap = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let i = n - 1; i >= 0; i--) {
        const [topScore, index] = indexedScores[0];
        result[index] = (n - 1 - i) < 3 ? rankMap[n - 1 - i] : (n - i).toString();

        indexedScores[0] = indexedScores[i];
        heapify(indexedScores, i, 0);
    }
    return result;
};

// const score = [5,4,3,2,1];
// console.log(findRelativeRanks(score));
// https://leetcode.com/problems/relative-ranks/




function heapify(arr, n, i) {
    let largest = i;

    let left = 2 * i + 1, right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
};

var lastStoneWeight = function(stones) {
    let n = stones.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(stones, n, i);
    }
    while (n > 1) {
        let y = stones[0];
        stones[0] = stones[n - 1];
        heapify(stones, n, 0);
        n--;

        let x = stones[0];
        stones[0] = stones[n - 1];
        n--;

        if (x !== y) {
            stones[n] = y - x;
            n++;
            let i = n - 1;
            while (i > 0 && stones[i] > stones[Math.floor((i - 1) / 2)]) {
                [stones[i], stones[Math.floor((i - 1) / 2)]] = 
                [stones[Math.floor((i - 1) / 2)], stones[i]];
                i = Math.floor((i - 1) / 2);
            }
        }

        if (n > 1) heapify(stones, n, 0);
    }
    return n === 1 ? stones[0] : 0;
};

// let stones = [906,472,398,718,213,89,300,866,64,383,865,187,226,399,585,62,95,54,29,63,590,194,398,853,180,430,780,824,949,261];
// console.log(lastStoneWeight(stones));
// https://leetcode.com/problems/last-stone-weight/