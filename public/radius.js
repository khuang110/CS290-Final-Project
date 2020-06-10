/*
 *   User defined radius
 */

var setRad = function(newRad) {
    if (newRad < minRad) {
        newRad = minRad;
    } else if (newRad > maxRad) {
        newRad = maxRad;
    }
    radius = newRad;
    context.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

var minRad = 1,
    maxRad = 100,
    defaultRad = 10,
    itv = 1,
    radSpan = document.getElementById('val'),
    incRad = document.getElementById('inc'),
    decRad = document.getElementById('dec');

decRad.addEventListener('click', function() {
    setRad(radius - itv);
});

incRad.addEventListener('click', function() {
    setRad(radius + itv);
});

setRad(defaultRad);