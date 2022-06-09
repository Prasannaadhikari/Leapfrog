// Write a program to sort an array of object by a target key. The original array should remain unchanged.

var arr = [
    {id: 1,
    name: 'John',}, 
    
    {id: 2,
    name: 'Mary',},
    
    {id: 3,
    name: 'Andrew',},];

function sortBy([...array], key) {
    let temp;
    for (let i=0; i<array.length-1; i++){
        for (let j=0; j<array.length-i-1; j++){
            if (array[j+1][key] < arr[j][key]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

var sorted = sortBy(arr, 'name');
console.log(sorted)
console.log(arr)