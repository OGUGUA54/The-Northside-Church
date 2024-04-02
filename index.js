const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
 header.classList.toggle (".sticky", window.scrollY > 0);
});





window.sr = ScrollReveal ({
    distance: '25px',
      duration: 2500,
      reset: true
})

sr.reveal('#introduction-text',{delay:200, origin:'bottom'})
sr.reveal('#Worship-with-usDiv',{delay:200, origin:'bottom'})
sr.reveal('#About',{delay:200, origin:'right'})
sr.reveal('#pastor',{delay:200, origin:'left'})




let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
     menu.classList.toggle("bx-x");
     navbar.classList.toggle("active");
}

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navbar.classList. remove('active');
}
 
 


let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 4000); 
}



 let countDownDate = new Date("feb 25, 2024 16:00:00").getTime();

 let x = setInterval(function(){

let now = new Date().getTime();

let distance = countDownDate - now;

let days = Math.floor(distance / (1000* 60 * 60 * 24));

let hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 *60)); 

  let minutes = Math.floor((distance % (1000* 60 * 60)) / (1000* 60));

let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML =  minutes;

document.getElementById("seconds").innerHTML=  seconds; 


if(distance < 0){

  clearInterval(x);
  
  document.getElementById("days").innerHTML = "THE DAY";
  
  document.getElementById("hours").innerHTML = "IS";
  
  document.getElementById("minutes").innerHTML = "FINALLY";
  
  document.getElementById("seconds").innerHTML = "HERE";

  document.getElementById("word").innerHTML = "";
  document.getElementById("wor").innerHTML = "";
  document.getElementById("wo").innerHTML = "";
  document.getElementById("wt").innerHTML = "";
  
  }

 
  
},1000);