import "./index.html";
import "./scss/style.scss";

let burgerIcon = document.querySelector('.header__burger-icon');
let burgerMenu = document.querySelector('.header__burger-nav');

burgerIcon.addEventListener("click", function(){
        burgerMenu.classList.toggle("shown");   
})

document.addEventListener("click", function(f){
   let click = f.composedPath().includes(burgerIcon);
   if (!click) {
      burgerMenu.classList.remove("shown");
   }
})

let btnVideo = document.querySelector('.button-video');
let video = document.querySelector('.video__content video');

btnVideo.addEventListener("click", function(){
   video.play();
   video.setAttribute('controls', 'controls');
   btnVideo.classList.add('button-video--hidden');
});

