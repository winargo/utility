function toggleFullScreen() {
  
    "use strict";
  
    var doc = window.document,
        docEl = doc.documentElement,
        requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen,
        cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
        document.requestFullScreen(docEl);
        document.body.style.backgroundColor = "#eaeaea";
    } else {
        cancelFullScreen.call(doc);
    }
}

function ubah_warna() {
    "use strict";
    var warna = document.getElementById("color1").value;
    document.getElementsByTagName("h1").style.color = warna;
    document.getElementsByTagName("h2").style.color = warna;
    document.getElementsByTagName("h3").style.color = warna;
    document.getElementsByTagName("h4").style.color = warna;
    document.getElementsByTagName("h5").style.color = warna;
    document.getElementsByTagName("h6").style.color = warna;
    document.getElementsByTagName("p").style.color = warna;
    document.getElementById("ww").style.color = warna;
}
function ubah_back() {
    "use strict";
    var warna1 = document.getElementById("color2").value;
    document.bgColor = warna1;
}