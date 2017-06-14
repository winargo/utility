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


$("enablemouse").addEventListener("click", function(){
           document.getElementById("test").innerHTML = "Hello World";
           })
var lastScrollTop = 0;


1
down vote

var updated=0,st;
$('body').on({
    'touchmove': function(e) { 
    st = $(this).scrollTop();
    if(st > updated) {
        console.log('down');
    }
    else {
        console.log('up');
    }
    updated = st;
    }
});
>>>>>>> 6695af908aa6a5437e6b09b878d9022f0787ef9b
