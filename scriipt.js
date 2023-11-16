let className = "white";
let scrollTrigger = 550;
let buttonClassName = "btn-green";

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById("nav").classList.add(className);
    document.getElementById("start").classList.add(buttonClassName);
  } else {
    document.getElementById("nav").classList.remove(className);
    document.getElementById("start").classList.remove(buttonClassName);
  }
};




function mAnimation() {
    let toggle = document.querySelectorAll("svg > g > g > g");
    let random = Math.floor(Math.random() * toggle.length);
    let randomly = Math.floor(Math.random() * 2);
    toggle[random].style.opacity = randomly;
  }
  function toggler() {
    setInterval(mAnimation, 50);
  }
  toggler();