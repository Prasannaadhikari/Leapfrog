// var bottom=Math.floor(Math.random() * 651);
// var left=Math.floor(Math.random() * 1151);
var bottom=0;
var left=1000;
var bottomToTop=true;
var leftToRight=true;

function create_ball(){
    var ball= document.createElement("div")
    ball.style.width = "50px";
    ball.style.height = "50px";
    ball.style.borderRadius="50%"
    ball.style.background = "white";
    ball.style.position = "absolute";
    ball.style.bottom ="0px";
    ball.style.left="590px";
    ball.setAttribute('id', `ball`);
    ball.style.transitionDelay="0.005s";
    const main = document.getElementById("main");
    main.appendChild(ball);
}

function jump(){
    const ball = document.getElementById("ball");

    if(bottomToTop){
        bottom +=10;
    }else{
        bottom -=10;
    }

    if(leftToRight){
        left+=10;
    }
    else{
        left-=10;
    }
     
    ball.style.bottom = bottom+"px";
    ball.style.left = left+"px";
    if(bottom==650){
        bottomToTop=false;
        ball.style.background = "red";
        
    }
    if(bottom==0){
        bottomToTop=true;
        ball.style.background = "cyan";
    }

    if(left==1150){
        leftToRight=false;
        ball.style.background = "white";
    }
    if(left==0){
        leftToRight=true;
        ball.style.background = "green";
    }
}

create_ball();
const timer=setInterval(function () {
    jump();         
},50);