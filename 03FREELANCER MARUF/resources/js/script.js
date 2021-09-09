/* This code loadint effect start */
/* EXTERNAL JS CODE FOR LOADING PAGE */
var preloader = document.getElementById('loading');
function myLoading() {
    preloader.style.display = 'none';
}
/* This code loadint effect end */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  
}

// OWL CAROUSEL FOR USE THIS CODE

/* This is use for counting project */
/* counter couting for use code starting */
let counters = document.querySelectorAll(".counter");
let time = 300;


counters.forEach(counter => {
  let updateCount = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;

    let increment = target / time;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 500);
    }else{
      counter.innerText = target;
    }
    
  };
  updateCount();
  
})

/* UNDER THIS CODE RESPONSIVE MENU BUTTON FOR USING */

var overlay = document.querySelector(".overlay_nav"),
    manubtn = document.querySelector(".iconManu"),
    closbtn = document.querySelector(".closeBtn"),
    overlay_nav = document.querySelector(".overlay_nav");
function mainManuLi() {
  overlay_nav.style.left = "-100%";
};
manubtn.addEventListener("click", function () {
  overlay_nav.style.left = "0";
});
closbtn.addEventListener("click", function () {
  overlay_nav.style.left = "-100%";
});
mainManuLi()


$(window).load(function(){
  $(window).on('scroll', function(){
      if($(window).scrollTop() > 50){
        $('.main_header').addClass('sticky');
      }else{
        $('.main_header').removeClass('sticky');
      }
  })
})