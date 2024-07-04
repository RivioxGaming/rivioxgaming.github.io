const img = document.getElementById('discord');
function updateImage() {
  img.src = "https://lanyard.cnrad.dev/api/1200520669570539620?" + new Date().getTime();
}

setInterval(updateImage, 1000);
