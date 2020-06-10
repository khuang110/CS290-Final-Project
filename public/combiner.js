var inputs = document.getElementsByClassName("color-input");
inputs[0].addEventListener("keyup", updateColor);

var addColorButton = document.getElementsByClassName("add-color-button");
addColorButton[0].addEventListener("click", addColor);

var removeColorButton = document.getElementsByClassName("remove-color-button");
removeColorButton[0].addEventListener("click", removeColor);

var calculateButton = document.getElementsByClassName("modal-accept-button");
calculateButton[0].addEventListener("click", displayResult);

var colorParams = 1;
var resultFound = false;


function updateColor() {
    var input = '#';
    input = input.concat(event.target.value);

    event.target.parentNode.style.backgroundColor = (input);

    if (input == '#') { event.target.parentNode.style.backgroundColor = ("#fafafa"); }
}

function addColor() {
    var newP = document.createElement("p");
    newP.appendChild(document.createTextNode("Enter a color code:"));

    var newL = document.createElement("label");
    newL.appendChild(document.createTextNode("#"));

    var newI = document.createElement("input");
    newI.classList.add("color-input");
    newI.addEventListener("keyup", updateColor);

    var newD = document.createElement("div");
    newD.classList.add("color-picker");
    newD.appendChild(newP);
    newD.appendChild(newL);
    newD.appendChild(newI);

    var colorContainer = document.body.childNodes[5];
    colorContainer.insertBefore(newD, colorContainer.childNodes[colorParams + 1]);
    colorParams++;

}

function removeColor() {
    if (colorParams < 1) { window.alert("There are no more colors to remove"); } else {
        var removeMe = document.getElementsByClassName("color-picker")[(colorParams - 1)];
        removeMe.parentNode.removeChild(removeMe);
        colorParams--;
    }
}

function displayResult() {
    var errorFlag = false;
    var colorArguments = document.getElementsByClassName("color-input");
    for (var i = 0; i < colorParams; i++) {
        if (colorArguments[i].value.length != 6) { errorFlag = true; }
        for (var j = 0; j < colorArguments[i].value.length; j++) {
            if (illegalChar(colorArguments[i].value.charAt(j))) { errorFlag = true; }
        }
    }
    if (colorParams == 0) { errorFlag = true; }

    if (errorFlag == true) { window.alert("One of your color code inputs is illegal. Try Again"); } else {
        var newColor = calculateResult();
        if (resultFound == true) {
            var newD = document.getElementById("result");
            newD.style.backgroundColor = newColor;
            newD.childNodes[0].childNodes[1].parentNode.removeChild(newD.childNodes[0].childNodes[1]);
            newD.childNodes[0].appendChild(document.createTextNode(newColor));
        } else {
            resultFound = true;
            var newP = document.createElement("p");
            newP.appendChild(document.createTextNode("Here's the new Color! "));
            newP.appendChild(document.createTextNode(newColor));

            var newD = document.createElement("div");
            newD.classList.add("color-picker");
            newD.id = "result";
            newD.appendChild(newP);

            newD.style.backgroundColor = newColor;

            var colorContainer = document.body.childNodes[5];
            colorContainer.appendChild(newD, colorContainer.childNodes[colorParams + 1]);
        }
    }
}

function illegalChar(testMe) {
    if (testMe.charCodeAt(0) < 58 && testMe.charCodeAt(0) > 47) { return false; } else if (testMe.charCodeAt(0) < 103 && testMe.charCodeAt(0) > 96) { return false; } else { return true; }
}

function calculateResult() {
    var colorArguments = document.getElementsByClassName("color-input");
    var running_sum = 0;
    var curr;
    var red = 0;
    var green = 0;
    var blue = 0;


    for (var i = 0; i < colorArguments.length; i++) {
        curr = colorArguments[i].value;
        red = red + hexToDec(curr.charAt(0), curr.charAt(1));
        green = green + hexToDec(curr.charAt(2), curr.charAt(3));
        blue = blue + hexToDec(curr.charAt(4), curr.charAt(5));
    }

    red = red / colorParams;
    green = green / colorParams;
    blue = blue / colorParams;

    return "#".concat(red.toString(16).substr(0, 2), green.toString(16).substr(0, 2), blue.toString(16).substr(0, 2));
}

function hexToDec(firstDig, secondDig) {
    return hexDigitToInt(firstDig) * 16 + hexDigitToInt(secondDig);
}

function hexDigitToInt(digit) {
    if (digit == '0') { return 0; }
    if (digit == '1') { return 1; }
    if (digit == '2') { return 2; }
    if (digit == '3') { return 3; }
    if (digit == '4') { return 4; }
    if (digit == '5') { return 5; }
    if (digit == '6') { return 6; }
    if (digit == '7') { return 7; }
    if (digit == '8') { return 8; }
    if (digit == '9') { return 9; }
    if (digit == 'a') { return 10; }
    if (digit == 'b') { return 11; }
    if (digit == 'c') { return 12; }
    if (digit == 'd') { return 13; }
    if (digit == 'e') { return 14; }
    if (digit == 'f') { return 15; }
}












//Don't collapse