function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

function ubah_warna()
{
    var warna = document.getElementById("color1").value;
    document.body.style.backgroundColor = warna ;
    document.getElementById("ww").style.color = warna;
}
function ubah_section()
{
    var warna = document.getElementById("color1").value;
    document.bgColor = warna ;
    document.getElementById("h4").style.color = warna;
}
