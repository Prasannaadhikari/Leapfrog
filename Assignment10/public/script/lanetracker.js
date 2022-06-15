function keyleft(){
    if(!player_car.style.left){
        player_car.style.left = left_lane;
        player_car.X = x_position[0];
    }
    else if(player_car.style.left == mid_lane){
        player_car.style.left = left_lane;
        player_car.X = x_position[0];
    }

    else if(player_car.style.left == right_lane){
        player_car.style.left = mid_lane;
        player_car.X = x_position[1];
    }
}

function keyright(){
    if(!player_car.style.left){
        player_car.style.left = right_lane;
        player_car.X = x_position[2];
    }

    else if(player_car.style.left == mid_lane){
        player_car.style.left = right_lane;
        player_car.X = x_position[2];
    }

    else if(player_car.style.left == left_lane){
        player_car.style.left = mid_lane;
        player_car.X = x_position[1];
    }
}