function random_num_gen(limit){
    return Math.floor(Math.random() * limit);
}


function get_car_Yposition(i){
    return (((i+1)* seperation)* -1);
}

function toPx(n){
    return `${n}px`;
}