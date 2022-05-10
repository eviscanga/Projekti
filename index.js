import * as bootstrap from 'bootstrap';


const buton = document.querySelectorAll(".butoni");
buton.forEach(b => {
  const child = b.querySelector("i");
  b.addEventListener('click', function (){
    child.classList.toggle("bi-heart-fill");
    child.classList.toggle("bi-heart");
    child.classList.toggle("text-danger");
    
  })
});




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
  },
});


var countDownDate = new Date("May 20, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + " Days: " + hours + " Hours: "
  + minutes + " Minutes: " + seconds + " Seconds ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


let appendNumber = 7;

    let prependNumber = 1;
    const swiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        200: {
          slidesPerView:1
        },
        300: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
      },
      pagination: {
        el: '.swiper-pagination2',
        type: 'fraction',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
