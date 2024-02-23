const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'assets/umbau.jpg',
  defaultZoomLvl: '30',
});


var mybtn = document.querySelector("#button")
var slide = document.querySelector("#slide")

mybtn.addEventListener("click", function() {
  slide.classList.toggle("show")
});