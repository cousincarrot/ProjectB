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

//mergesort test
sortTest = new Array();

sortTest[0] = 20;
sortTest[1] = 40;
sortTest[2] = 30;
sortTest[4] = 10;

console.log(sortTest.length);
