<<<<<<< HEAD
=======
function changeBackground() {
    var color = document.getElementById("color").value; // cached

    // The working function for changing background color.
    document.bgColor = color;

    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("coltext").style.color = color;
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);

function enablemouse(event) {
    alert("You pressed button: " + event.button);
}

function scroll(){
    alert("mouse enabled");
    document.body.doScroll(event.wheelDelta>0?"left":"right");
}
function changebg(){
    alert('asjdlkajldakjdlajl');
}


>>>>>>> 6695af908aa6a5437e6b09b878d9022f0787ef9b
