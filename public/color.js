/*
 *   Change colors
 */
var colors = ['black', 'pink', 'orange', 'red', 'yellow',
    'gray', 'violet', 'green', 'blue'
];

// dynamically create div of colors
for (var i = 0, n = colors.length; i < n; i++) {
    var d = document.createElement('div');
    d.className = 'color';
    d.style.backgroundColor = colors[i];
    d.addEventListener('click', setColor);
    document.getElementById('Color-list').appendChild(d);
}

// select color element
function se(col) {
    context.fillStyle = col;
    context.strokeStyle = col;
    var active = document.getElementsByClassName('active')[0];

    if (active) {
        active.className = 'color';
    }
}

// set color
function setColor(e) {
    var color = e.target;
    console.log(color);
    se(color.style.backgroundColor);
    color.className += ' active';

}

// set eraser
function setWhite() {
    var color = document.getElementById('white');
    console.log(color);
    se('white');
    color.className += ' active';
}