//To Do: Point to the .txt doc wih the array vlues in it
//set the values of that doc in an array
//merge sort the values of that array
//console.log the computed the number of inversions in the file given,
//where the ith row of the file indicates the ith entry of an array
/*
function readTextFile("https://lagunita.stanford.edu/asset-v1:Engineering+Algorithms1+SelfPaced+type@asset+block/IntegerArray.txt") {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "IntegerArray.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
*/

//creating a simple array to test mergesort functionality
sortTest = new Array(6, 5, 4, 3, 2, 1);
/*
sortTest[0] = 20;
sortTest[1] = 40;
sortTest[2] = 30;
sortTest[3] = 10;
*/
console.log(sortTest.length);

//setting a tally for inversions
var tally = 0;

//mergesort
// Split the array into halves and merge them recursively
function mergeSort (sortTest) {
  if (sortTest.length === 1) {
    // return once we hit an array with a single item
    return sortTest;
  }

  sortTest.middle = Math.floor(sortTest.length / 2) // get the middle item of the array rounded down
  sortTest.left = sortTest.slice(0, sortTest.middle) // items on the left side
  sortTest.right = sortTest.slice(sortTest.middle) // items on the right side

  return merge(
    mergeSort(sortTest.left),
    mergeSort(sortTest.right)
  )
};

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
      tally++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
};


console.log(mergeSort(sortTest)); // [10, 20, 30, 40]
console.log(tally);
