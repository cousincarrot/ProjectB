//To Do: test a smaller array to make sure it is sorting

var rawFile;
var allText;
var tally = 0;

function readTextFile(file) {
  console.log("inside readTextFile");

    rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.send(null);
  //  console.log(rawFile);
    //console.log(rawFile.responseText);
    rawFile.onreadystatechange = function ()
    {
      console.log("inside onreadystatechange");

        if(rawFile.readyState === 4)
        {
          console.log("inside readystate === 4");

            if(rawFile.status === 200 || rawFile.status == 0)
            {
              console.log("inside status === 200 || status === 0");
                allText = rawFile.responseText;
                alert(allText);
                console.log(allText);
                var tempArray = allText.split("\n");
                console.log(tempArray[3]);
                console.log(tempArray[120]);
                console.log(tempArray[125]);
                console.log(tempArray);
                countInversions(tempArray);
                console.log(tally);
                //I need to test that merge sort is working with a much smaller array

            }
        }
    }
  //  rawFile.send(null);
}
readTextFile("http://karensiebald.com/ProjectB/IntegerArray.txt");

//can I just call the rawFile variable an array??
//console.log(allText);
//var array = [allText];
  //sourced from https://gist.github.com/rewonc/62b40c5f2f7f67ffa928
function countInversions(array){
  // Note: this uses a variant of merge sort

  //input handlers
  if (array === undefined) {
  console.log("Array must be defined to count inversions");
    }
  if (array.length === 0 || array.length === 1) return 0;

  tally = 0; // count for inversions
  sort(array); // merge sort the array and increment tally when there are crossovers
  return tally;



  function sort(arr) {
    if (arr.length === 1) return arr;
    var right = arr.splice(Math.floor(arr.length/2), arr.length - 1);
    return merge(sort(arr), sort(right));
  }
  function merge(left, right){
    var merged = [];
    var l = 0, r = 0;
    var multiplier = 0;
    while (l < left.length || r < right.length){
      if (l === left.length){
        merged.push(right[r]);
        r++;
      } else if (r === right.length){
        merged.push(left[l]);
        l++;
        tally += multiplier;
      } else if (left[l] < right[r]) {
        merged.push(left[l]);
        tally += multiplier;
        l++;
      } else {
        merged.push(right[r]);
        r++;
        multiplier++;
      }
    }
    return merged;
  }
}
