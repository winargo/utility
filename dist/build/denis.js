function toggleFullScreen() {
    var doc = window.document,docEl = doc.documentElement,requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen,cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
        document.requestFullScreen(docEl);
        document.body.style.backgroundColor = "#eaeaea";
    } else {
        cancelFullScreen.call(doc);
    }
}
