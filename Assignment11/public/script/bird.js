
class Bird{
    constructor(x,y){
        this.x = x;
        this.y = y; 
        this.s = speed;
        this.g = gravity;
        this.actor = document.querySelector('.bird');        
    }
    move_up(pipe, pipe1){
        this.y-=this.s;
        this.actor.style.top = `${this.y}px`;
        key_up=false;
        this.g = gravity;
        this.checkCollision(pipe, pipe1);
    }

    pull_down(pipe, pipe1){
        this.y+=(this.g);
        this.g+=gravity;
        this.actor.style.top = `${this.y}px`;
        this.checkCollision(pipe, pipe1);
    }

    checkCollision(pipe, pipe1){
            if(this.y>boundary_width_limit || this.y<0){
                this.endgame();
            }
            else if(this.x == pipe.PipeUp.x && this.y <= pipe.PipeUp.height+10 || this.x == pipe1.PipeUp.x && this.y <= pipe1.PipeUp.height){
                this.endgame();
            }

            else if(this.x == pipe.PipeDown.x && this.y >= bird_boundary_limit - pipe.PipeDown.height || this.x == pipe1.PipeDown.x && this.y >= bird_boundary_limit - pipe1.PipeDown.height){              
                this.endgame();
            }
            else {
                score++;
                if(score > localStorage.highscore){
                    localStorage.highscore = score;
                }
                document.querySelector(".score").innerHTML = score;
            }
    } 

    endgame(){
        // let section = document.querySelector(".section");
        let start_menu = document.querySelector(".start_menu");
        start_menu.style.display = 'block';
        document.querySelector(".topic").innerHTML = "GAME OVER";
        let background = document.querySelector(".backimage");
        // console.log(background);
        // section.removeChild(background);
        background.style.display = 'none';
        while (background.hasChildNodes()) {
            console.log(background.childNodes);
            background.removeChild(background.firstChild);
          }
        let your_score = document.querySelector(".your_score");
        your_score.style.display = "block";
        document.querySelector(".your_score").innerHTML = `Your score is ${score} <br><br> High Score: ${localStorage.highscore}`;
        document.querySelector(".start_button").innerHTML = "Restart";
        player = false;   
    }

    track_movement(pipe, pipe1){
        document.onkeydown = checkKey; 
        function checkKey(e) { 
            e = e || window.event;
            if (e.keyCode == '38') {
                key_up= true;
            }
        }
        if(key_up){
            this.move_up(pipe, pipe1);
        }else{
            this.pull_down(pipe, pipe1);
        }
    }
}






