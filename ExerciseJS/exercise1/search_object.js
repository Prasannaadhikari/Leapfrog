var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(obj, value){
    for(const item of obj){
        if(item.name === value){
            console.log(item)
        }
    }
}


function searchByKey(obj, key, value){
    for(const item of obj){
        if(item[key] === value){
            console.log(item)
        }
    }
}

searchByName(fruits, 'Apple');
searchByKey(fruits, 'name', 'Apple'); 
