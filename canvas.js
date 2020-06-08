/*
 *   drawing page
 */

var canvas = document.getElementById('can');
var context = canvas.getContext("2d");

var radius = 10,
    dragging = false; // is mouse button held down

canvas.width = window.innerWidth / 2;
canvas.height = window.innerWidth / 2;

context.lineWidth = radius * 2;

var putPoint = function(e) {
    if (dragging) {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }
}

function erase() {
    var m = confirm("Are you sure you want to clear the screen?");
    if (m) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function save() {

}

var click = function(e) {
    dragging = true;
    putPoint(e);
}

var unclick = function() {
    dragging = false;
    context.beginPath();
}

canvas.addEventListener('mousedown', click);
canvas.addEventListener('mouseup', unclick);
canvas.addEventListener('mousemove', putPoint);