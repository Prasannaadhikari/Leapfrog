const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;

function change_slide(curSlide){
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
      });
      const timer = setInterval(change_slide, 200);
}

const nextSlide = document.querySelector(".button_next");
nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

    change_slide(curSlide);
});


const prevSlide = document.querySelector(".button_prev");
prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

    change_slide(curSlide); 
});

for (let i=0; i<slides.length;i++){
    let circle = document.createElement("div");
    circle.style.width = '15px';
    circle.style.height = '15px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'lightgray';
    circle.style.margin = '0px 10px';
    circle.setAttribute('id', `circle${i}`)
    dotted.appendChild(circle);
}

var btn1 = document.getElementById('circle0');
var btn2 = document.getElementById('circle1');
var btn3 = document.getElementById('circle2');



btn1.onclick = function(){
    // slides[0].style.transform = `translateX(0%)`;
    // slides[1].style.transform =  `translateX(100%)`;
    // slides[2].style.transform =  `translateX(200%)`;
    curSlide=0;
    change_slide(curSlide);
}

btn2.onclick = function(){
    curSlide=1;
    change_slide(curSlide);
}

btn3.onclick = function(){
    curSlide=2;
    change_slide(curSlide);
}