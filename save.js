/*
 *   save image as a png
 */
var saveBut = document.getElementById('btn');

saveBut.addEventListener('click', saveImage);

function saveImage() {

    canvas.toBlob(function(blob) {
        var newImg = document.createElement('img'),
            url = URL.createObjectURL(blob);

        newImg.onload = function() {
            // no longer need to read the blob so it's revoked
            URL.revokeObjectURL(url);
        };

        newImg.src = url;
        document.body.appendChild(newImg);
    });

}