//Write a function that transforms an array of inputs into a new array based on a provided transformation function.

var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) { 
    console.log(collection.map(tranFunc));
 }

var output = transform(numbers, function(num) {
    return num * 2;
});