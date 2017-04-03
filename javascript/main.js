let rows = 2;
let columns = 3;
let length = rows * columns;

function main() {
  let gallery = document.getElementById('videos');

  for (let i = 0; i < length; i++) {
    let video = document.createElement('video');
    video.src = 'videos/' + '0' + (i + 1).toString() + '.mp4';
    video.autoplay = true;
    video.loop = true;
    gallery.appendChild(video);
  }
}

window.onload = main;
