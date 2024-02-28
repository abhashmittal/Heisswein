const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'assets/umbau5.jpg',
  defaultZoomLvl: '30',
});


var mybtn = document.querySelector("#button")
var slide = document.querySelector("#slide")
var info = document.querySelector("#info")

mybtn.addEventListener("click", function() {
  slide.classList.toggle("show")
});