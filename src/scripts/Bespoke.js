<<<<<<< HEAD
=======
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

var x = document.getElementById("myFile");
>>>>>>> 6695af908aa6a5437e6b09b878d9022f0787ef9b
