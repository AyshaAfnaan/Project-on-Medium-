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