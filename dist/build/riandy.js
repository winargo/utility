function changeBackground() {
    var color = document.getElementById("color1").value;
    document.bgColor = color;
    document.body.style.backgroundColor = color;
    document.html.style.backgroundColor = color;
    document.html.style.color = color;
    document.body.style.color = color;
}

document.getElementById("submitColor1").addEventListener("click", changeBackground, false);

function changeBackground1() {
    var warna = document.getElementById("color2").value;
    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("a1").style.color = warna;
    document.getElementById("a2").style.color = warna;
    document.getElementById("a3").style.color = warna;
    document.getElementById("a4").style.color = warna;
    document.getElementById("a5").style.color = warna;
    document.getElementById("a6").style.color = warna;
    document.getElementById("a7").style.color = warna;
    document.getElementById("a8").style.color = warna;
    document.getElementById("a9").style.color = warna;
    document.getElementById("a10").style.color = warna;
    document.getElementById("a11").style.color = warna;
    document.getElementById("a12").style.color = warna;
    document.getElementById("a13").style.color = warna;
    document.getElementById("a14").style.color = warna;
    document.getElementById("a15").style.color = warna;
    document.getElementById("a16").style.color = warna;
    document.getElementById("a17").style.color = warna;
    document.getElementById("a18").style.color = warna;
    document.getElementById("a19").style.color = warna;
    document.getElementById("a20").style.color = warna;
    document.getElementById("a21").style.color = warna;
    document.getElementById("a22").style.color = warna;
    document.getElementById("a23").style.color = warna;
    document.getElementById("a24").style.color = warna;
    document.getElementById("a25").style.color = warna;
    document.getElementById("a26").style.color = warna;
    document.getElementById("a27").style.color = warna;
    document.getElementById("a28").style.color = warna;
    document.getElementById("a29").style.color = warna;
    document.getElementById("a30").style.color = warna;
    document.getElementById("a31").style.color = warna;
    document.getElementById("a32").style.color = warna;
    document.getElementById("a33").style.color = warna;
    document.getElementById("a34").style.color = warna;
    document.getElementById("a35").style.color = warna;
    
    
}

document.getElementById("submitColor2").addEventListener("click", changeBackground1, false);



document.getElementById("enablemouse").addEventListener("click", function (){
document.getElementById("test").innerHTML = "Enabled";
alert("Mouse Scroll enabled");
$(document).ready(function(){
    $("article").bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            mKeyra();
        }
        else{
            mKeyla();
        }
    });
});
    
});

function mKeyla(){
    var e = new Event('keydown');
    e.which = 37; // Character F11 equivalent.
    e.altKey=false;
    e.ctrlKey=false;
    e.shiftKey=false;
    e.metaKey=false;
    e.bubbles=true;
    document.dispatchEvent(e);
}

function mKeyra(){
    //alert("Mouse Scroll up");
    var e = new Event('keydown');
    e.which = 39; // Character F11 equivalent.
    e.altKey=false;
    e.ctrlKey=false;
    e.shiftKey=false;
    e.metaKey=false;
    e.bubbles=true;
    document.dispatchEvent(e);
}
/*
document.getElementsByTagName("article")[0].addEventListener("wheel", enablemouse);
function enablemouse(){
    $("article").click(function(){
    alert("The paragraph was clicked.");
});
}
*/


function ganttEach() {
  $("td.gantt").each(function() {
    // ...
  });
}



$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
    $("h1").click(function(){
        $(this).hide();
    });
    $("h2").click(function(){
        $(this).hide();
    });
    $("h3").click(function(){
        $(this).hide();
    });
    $("img  ").click(function(){
        $(this).hide();
    });
});

var event_object = document.getElementsByTagName("html");

function emitKeyEvent() {

	//    This function triggers the event
    var keyEvent = new KeyboardEvent("keypress", {key : "p", char : "p", ctrlKey: true, shiftKey: true});
    event_object.dispatchEvent(keyEvent);
}

event_object.addEventListener('keypress', function(e){
    
    //    This function listens to the event
    console.log(event, 'ctrlKey: ' + e.ctrlKey, 'shiftKey: '+ e.shiftKey, e.char, e.key);
    alert('CTRL + SHIFT + p pressed')
    
    e.preventDefault();

});
