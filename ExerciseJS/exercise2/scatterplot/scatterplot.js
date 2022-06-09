var points = [
    {x: 10, y: 20},
    {x: 40, y: 40},
    {x: 60, y: 20},
    {x: 20, y: 60},
    {x: 100, y: 10},
    {x: 50, y: 50},
    {x: 30, y: 30},
    {x: 90, y: 90}
];
var i=0

function createCircle(x,y){
        var point = document.createElement("div");
        point.style.width = "10px";
        point.style.height = "10px";
        point.style.borderRadius="50%"
        point.style.background = "blue";
        point.style.position = "absolute";
        point.style.bottom = (y*10+"px");
        point.style.left = (x*10+"px");
        point.setAttribute('id', `point-${i}`)
        const main = document.getElementById("main");
        i++;
        main.appendChild(point);
        point.addEventListener("click",(e)=>{
            point.remove(); });  
}


points.map(function(point){
    createCircle(point.x, point.y)
});
