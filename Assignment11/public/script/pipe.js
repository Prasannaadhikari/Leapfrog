class Pipe{
    constructor(x_pos){
        this.PipeUp = document.createElement("div");
        this.PipeUp.setAttribute("class", "obstacleUp");
        this.PipeDown = document.createElement("div");
        this.PipeDown.setAttribute("class", "obstacleDown");
        let background = document.querySelector(".backimage");
        background.appendChild(this.PipeUp);
        background.appendChild(this.PipeDown);
        this.PipeUp.x = x_pos;
        this.PipeDown.x=x_pos;
        this.generate_height();
    }

    generate_height(){
        this.PipeUp.height = Math.floor(Math.random()*180)+100;
        this.PipeDown.height = boundary_width_limit - this.PipeUp.height - gap_width;
        this.PipeUp.style.height = `${this.PipeUp.height}px`;
        this.PipeDown.style.height = `${this.PipeDown.height}px`;
    }

    
    move(){
        this.PipeUp.x-=5;
        this.PipeDown.x-=5;
        this.PipeUp.style.left = `${this.PipeUp.x}px`;
        this.PipeDown.style.left = `${this.PipeDown.x}px`;

        if(this.PipeUp.x <= -boundary_width_low && this.PipeDown.x <= -boundary_width_low){
            this.PipeUp.x = boundary_height_limit;
            this.PipeDown.x=boundary_height_limit;
            this.generate_height();
        }
    }
}