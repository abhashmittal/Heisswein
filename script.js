const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'assets/umbau4.jpg',
  defaultZoomLvl: '30',
});


var mybtn = document.querySelector("#button")
var slide = document.querySelector("#slide")
var info = document.querySelector("#info")
var nav = document.querySelector("#nav")

mybtn.addEventListener("click", function() {

  slide.classList.toggle("show");
  mybtn.classList.toggle('active');
  info.classList.toggle('active');
  nav.classList.toggle('active')


  // if (document.getElementById("slide").style.opacity = 'blue') {
  // document.getElementById("button").style.backgroundColor = '#ff5100',
  // document.getElementById("info").style.visibility = 'hidden',
  // slide.classList.toggle("show");
  // } else {
  //   slide.classList.toggle("show"),
  //   document.getElementById("button").style.backgroundColor = 'blue'
  //   document.getElementById("info").style.visibility = 'hidden'
  // }  
});


