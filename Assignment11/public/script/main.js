function playarea(){
    player = true;
    let start_menu = document.querySelector(".start_menu");
    start_menu.style.display = 'none';
    let background = document.querySelector(".backimage");
    // let your_score = document.querySelector(".your_score");
    // your_score.display.style = 'none';
    start_menu.style.display = 'none';
    background.style.display = 'flex';
    // if(!document.querySelector(".bird") && !document.querySelector(".score") ){
    //     let bird = document.createElement("div");
    //     bird.setAttribute("class", "bird");
    //     background.appendChild(bird);
    //     let score = document.createElement("div");
    //     score.setAttribute("class", "score");
    //     background.appendChild(score);
    // }

    if(player){
        let pipe = new Pipe(boundary_height_limit);
        let pipe1 = new Pipe(boundary_height_limit + 200);
        let bird = new Bird(50,250);
        const timer = setInterval(() => {
            pipe.move();
            pipe1.move();
            bird.track_movement(pipe, pipe1);
        }, 50);
    }
}