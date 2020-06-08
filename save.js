/*
 *   save image as a png
 */
var saveBut = document.getElementById('btn');

saveBut.addEventListener('click', saveImage);

function saveImage() {
    console.log("------------------");
    var data = canvas.toDataURL();

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        // check if fully loaded and page is ok
        if (req.readyState == 4 && req.status == 200) {
            var res = req.responseText;
            window.open(data, '_blank', 'location=0, menubar=0');
        }
    }

    // send data
    req.open('POST', 'img.php', true);
    req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    req.send('img=' + data);

}