// Problem: Compute the running median of a sequence of numbers.
//
// That is, given a stream of numbers, print out the median of the
// list so far on each new element.
// Recall that the median of an even-numbered list is
// the average of the two middle numbers.
//
// For example, given the sequence
// [2, 1, 5, 7, 2, 0, 5]
//
// your algorithm should print out
// [2, 1.5, 2, 3.5, 2, 2, 2]


// Use Babel with Quokka.js IDE plugin
{
  babel: {
    presets: ["es2015"]
  }
}

// After some googling:
// Most optimal solution is to use heaps: https://www.youtube.com/watch?v=1CxyVdA_654

// Collections.js provides a heap datastructure constructor
// http://www.collectionsjs.com/heap
//
// npm install collections --save

const Heap = require("collections/heap");
//const sourceArray = [2, 1, 5, 7, 2, 0, 5];

// Bigger array to test performance
const sourceArray = Array(10000).fill().map(() => Math.round(Math.random() * 1000));


// This function serves to balance two heaps, so they
// contain an equal number of elements.
const balanceHeaps = (heap1, heap2) => {
  while (Math.abs(heap1.length - heap2.length) >= 2) {
    if (heap1.length > heap2.length) {
      heap2.push(heap1.pop());
    } else {
      heap1.push(heap2.pop());
    }
  }
};

//
const medianArray = arr => {
  // minHeap will contain half of the numbers iterated over, the larger ones
  const minHeap = new Heap([], null, (a, b) => b - a);
  // the maxHeap takes the other half, the smaller numbers
  const maxHeap = new Heap();

  return arr.map(element => {
    // Deal with first element, push to maxHeap
    if (maxHeap.length === 0) {
      maxHeap.push(element);
      return element;
    }

    // Deal with second element
    // After this, both Heaps will contain an element
    if (maxHeap.length === 1 && minHeap.length === 0) {
      if (element >= maxHeap.peek()) {
        minHeap.push(element);
      } else {
        // element is smaller than prev element
        // so move prev el to minHeap and push current el to maxHeap
        minHeap.push(maxHeap.pop());
        maxHeap.push(element);
      }
      return (maxHeap.peek() + minHeap.peek()) / 2;
    }

    // Now heaps are initialized see which one the element should go in
    if (element <= maxHeap.peek()) {
      maxHeap.push(element);
    } else {
      minHeap.push(element);
    }

    // Balance heaps, so their lengths are same or +1
    balanceHeaps(maxHeap, minHeap);

    // Return average of heap roots if even number of elements
    if (maxHeap.length === minHeap.length) {
      return (maxHeap.peek() + minHeap.peek()) / 2;
    } else if (maxHeap.length > minHeap.length) {
      return maxHeap.peek();
    } else {
      return minHeap.peek();
    }
  });
};

const result = medianArray(sourceArray); //?. $
console.log(result.length);
// Should be: 2, 1.5, 2, 3.5, 2, 2, 2
