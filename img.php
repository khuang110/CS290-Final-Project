<?php

 $data = $_POST['img'];

// // replace stuff at the beginning of data with nothing
$data = str_replace('data:image/png;base64,', '', $data);
//change the space to +
$data = str_replace(' ', '+', $data);

$img = base64_decode($data);

// make unique name and make png
$path = './images/' . uniqid() . '.png';

// try to put img data in path else fail
if (file_put_contents($path, $img)) {
    print $path;
} else {
    header("HTTP/1.1 500 Internal Server Error");
}

?>