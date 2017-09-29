//To Do: Point to the .txt doc wih the array vlues in it
//set the values of that doc in an array
//merge sort the values of that array
//console.log a specific piece of data from the array

function readTextFile("file:///D:/Documents/coding_projects/git_repositories/ProjectB/IntegerArray.txt") {
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
