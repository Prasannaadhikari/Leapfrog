// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 8080;

// app.use(express.json());
// app.use(cors());

// app.listen(port, () => {
//     console.log(`Server running on port: ${port}`);
//  });

function toPx(x){
    return `${x}px`;
}

var i=0;

class Ball{
    constructor(x,y,r, sX, sY){
        this.x=x;
        this.y=y;
        this.bottom = this.x;
        // Math.floor(Math.random() * 600);
        this.left=this.y;
        this.radius=r;
        this.mass = r;
        this.sX=sX;
        this.sY=sY;
        // Math.floor(Math.random()*1100);
        this.bottomToTop = Math.floor(Math.random()*2);
        this.leftToRight=Math.floor(Math.random()*2);
    }

    create_ball(){
            this.ball= document.createElement("div");
            this.ball.style.width = toPx(2*this.radius);
            this.ball.style.height = toPx(2*this.radius);
            this.ball.style.borderRadius="50%"
            this.ball.style.background = "red";
            this.ball.style.position = "absolute";
            this.ball.style.bottom =toPx(this.x);
            this.ball.style.left=toPx(this.y);
            this.ball.setAttribute('id', `ball${i}`);
            this.ball.style.transitionDelay="0.000005s";
            const main = document.getElementById("main");
            main.appendChild(this.ball);
            i++;
        }

        checkBoxCollision(){
            if(this.bottom>=650){
                this.bottomToTop=false;
                this.ball.style.background = "red";      
            }
                
            if(this.bottom<=0){
                this.bottomToTop=true;
                this.ball.style.background = "cyan";
            }
            
            if(this.left>=1150){
                this.leftToRight=false;
                this.ball.style.background = "white";
            }
                
            if(this.left<=0){
                this.leftToRight=true;
                // this.ball.style.background = "green";
            }
        }
             

    jump(){
        // ball = this.ball = document.getElementById("ball");
        
        if(this.bottomToTop){
            this.bottom +=this.sY;
        }else{
            this.bottom -=this.sY;
        }
        
        if(this.leftToRight){
            this.left+=this.sX;
        }
        else{
            this.left-=this.sX;
        }
             
        this.ball.style.bottom = this.bottom+"px";
        this.ball.style.left = this.left+"px";


        this.checkBoxCollision();
        // this.checkCircleCollision(this.ball, this.ball);
    }

    across_jumping(vxf, vyf){        
        if(this.bottomToTop){
            this.bottom +=vyf;
        }else{
            this.bottom -=vyf;
        }
        
        if(this.leftToRight){
            this.left+=vxf;
        }
        else{
            this.left-=vxf;
        }
             
        this.ball.style.bottom = this.bottom+"px";
        this.ball.style.left = this.left+"px";


        this.checkBoxCollision();
    }


    circlecollision(vxf, vyf){
        if (this.bottomToTop){
            this.bottomToTop=false;
        }else{
            this.bottomToTop=true;
        }
        if (this.leftToRight){
            this.leftToRight=false;
        }else{
            this.leftToRight=true;
        }

        this.across_jumping(vxf, vyf);
    }
}   



function animation(){
    let balls=[]
    const ball_no=6;

    for (let i=0; i<ball_no;i++){
        let ball = new Ball(Math.floor(Math.random()*1000)+1, Math.floor(Math.random()*200)+1, Math.floor(Math.random()*25)+5, Math.floor(Math.random()*20)+1, Math.floor(Math.random()*20)+1);
        balls.push(ball)
        ball.create_ball();

        const timer=setInterval(function () {
            ball.jump();     
            
            balls.forEach((ball1) => {
                if(ball != ball1){
                    var a = ball.left - ball1.left;
                    var b = ball.bottom - ball1.bottom;
                    var c = (a * a) + (b * b);
                    var radii = ball.radius + ball1.radius;
                    console.log(radii * radii >= c);
                    if(radii * radii >= c){
                        var vx1f = ((ball.mass-ball1.mass)*ball.sX + 2*ball1.mass * ball1.sX)/(ball.mass+ball1.mass);
                        var vy1f = ((ball.mass-ball1.mass)*ball.sY + 2*ball1.mass * ball1.sY)/(ball.mass+ball1.mass);

                        var vx2f = ((ball1.mass-ball.mass)*ball1.sX + 2*ball.mass * ball.sX)/(ball.mass+ball1.mass);
                        var vy2f = ((ball1.mass-ball.mass)*ball1.sY + 2*ball.mass * ball.sY)/(ball.mass+ball1.mass);

                        ball.circlecollision(vx1f, vy1f);
                        ball1.circlecollision(vx2f, vy2f);
                    }
                }
            });
        },30);
    }
}

animation();








    // const timer = ()=>{
    //     ball.jump();
    //     request = requestAnimationFrame(timer);   
    // }

    // requestAnimationFrame(timer);
//}

// const ball2 = new Ball(0,100);
// ball2.create_ball();

// const timer=setInterval(function () {
//     ball1.jump();
//     ball2.jump();         
// },50);