// Write a program to normalize a given input to get the expected output.
// From this
// var input = {
//     '1': {
//       id: 1,
//       name: 'John',
//       children: [
//         { id: 2, name: 'Sally' },
//         { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
//       ]
//     },
//     '5': {
//       id: 5,
//       name: 'Mike',
//       children: [{ id: 6, name: 'Peter' }]
//     }
//   };
//   // To this
//   var output = {
//     '1': { id: 1, name: 'John', children: [2, 3] },
//     '2': { id: 2, name: 'Sally' },
//     '3': { id: 3, name: 'Mark', children: [4] },
//     '4': { id: 4, name: 'Harry' },
//     '5': { id: 5, name: 'Mike', children: [6] },
//     '6': { id: 6, name: 'Peter' }
//   };

var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };

  // console.log(input[1].children[1].children[0].id);

var output={};
var i=0;

function normalize_recursive(input1){
    output[`${++i}`]={id: input1.id, name: input1.name};

    if(input1.children){
      output[`${i}`].children = new Array();
      for (let j=0; j<input1.children.length; j++){
        output[`${i}`].children.push(input1.children[j].id);
      }


      for (let j=0; j<input1.children.length; j++){
        output[`${++i}`] = {id: input1.children[j].id, name: input1.children[j].name};


        if(input1.children[j].children){
          for (let k=0; k<input1.children[j].children.length; k++){
            normalize_recursive(input1.children[j].children[k]);
          }  
        }

      }
    }
    
}

for (var item in input){
  normalize_recursive(input[item]);
}

console.log(output);