const main_road = document.querySelector('.road');
const player_car = document.querySelector('.mycar');
player_car.X=x_position[1];
var player=false;
var score=0;

function playarea(){
    const start = document.querySelector('.start_menu');
    start.style.display='none';
    main_road.style.display ='block'

    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == arrowLeft) {
        keyleft();
        }
        else if (e.keyCode == arrowRight) {
        keyright();
        }
    }
    if(document.onkeydown){
        player=true;
    }

    if(player){
        function create_enemies(){
            for (let i=0; i<number_of_cars;i++){
                let enemies = document.createElement("div");
                enemies.setAttribute('class', 'othercar');
                enemies.Y= get_car_Yposition(i);
                enemies.style.top = `${enemies.Y}px`; 
                var pos = random_num_gen(3);
                enemies.X=x_position[pos];
                if(i>1){
                    if(enemies.style.left[i-1]===enemies.style.left[i]){
                        pos = random_num_gen(3);
                    }
                }
                enemies.style.left = `${x_position[pos]}%`;
                main_road.append(enemies);
            }
        }
        
        function move_ahead(){
            create_enemies();
            function move_enemies(){
                var enemies = document.querySelectorAll(".othercar");
                for (let i=0; i<enemies.length; i++){
                    enemies[i].Y+=leap_ahead;
                    enemies[i].style.top =`${enemies[i].Y}px`;
                    
                    if( (enemies[i].Y) >= car_positionY && enemies[i].X==player_car.X){
                        player=false;
                        var end_menu = document.querySelector(".end_menu");
                        main_road.style.display ='none';
                        end_menu.style.display = 'block';
                    }

                    else if ( (enemies[i].Y) >= car_positionY && enemies[i].X!=player_car.X){
                        score++;
                        document.querySelector(".score").innerHTML = score;
                    }

                    if(enemies[i].Y >= height_limit){
                        main_road.removeChild(enemies[i]); 
                    }
                }
            }
        
            const timer = setInterval(move_enemies, inst_time);
    }
    window.setInterval(move_ahead, animation_time);
    }
}




