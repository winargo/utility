function changeBackground() {
    var color = document.getElementById("color1").value;
    
    document.bgColor = color;
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
    
}

document.getElementById("submitColor2").addEventListener("click", changeBackground1, false);


function enablemouse(event) {
    alert("You pressed button: " + event.button);
}


document.getElementById("enablemouse").addEventListener("click", function (){
document.getElementById("test").innerHTML = "Hello World";});

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
