function count(arr, value) {
    var count = 0;
    debugger;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++
        }
    }
    return count;
}

function insertionsort(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
}


function disArr() {
    let nums = [];
    for (var i = 0; i < 100; i++) {

        nums[i] = Math.floor(Math.random() * 90 + 10);
        document.write(nums[i] + ',');
        let number = i % 10 === 9;
        if (number) {
            document.write(nums[i] + "<br>");
        }
    }
    document.write('<br>');
    return nums;
}

let nums = disArr();
insertionsort(nums);
for (var i = 0; i < 100; i++) {
    document.write(nums[i] + ',');
    let number = i % 10 === 9;
    if (number) {
        document.write(nums[i] + "<br>");
    }
}

var val = parseInt(prompt('Enter a value to count: '));
var retVal = count(nums , val);
document.write('<br>');
document.write('Found ' +  retVal + ' occurrences of ' + val + ' . ');