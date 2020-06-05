var inputs = document.getElementsByClassName("color-input");
inputs[0].addEventListener("keyup", updateColor);

var addColorButton = document.getElementsByClassName("add-color-button");
addColorButton[0].addEventListener("click", addColor);

var colorParams = 1;

var calculateButton = document.getElementsByClassName("modal-accept-button");
calculateButton[0].addEventListener("click", displayResult);

function updateColor()
{
  var input = '#';
  input = input.concat(event.target.value);

  event.target.style.backgroundColor = (input);

  if(input == '#'){event.target.style.backgroundColor = ("#eee");}
}

function addColor()
{
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
  colorContainer.insertBefore(newD, colorContainer.childNodes[colorParams+1]);
  colorParams++;

}

function displayResult()
{
  var newColor = calculateResult();

  var newP = document.createElement("p");
  newP.appendChild(document.createTextNode("Here's the new Color! "));
  newP.appendChild(document.createTextNode(newColor));

  var newD = document.createElement("div");
  newD.classList.add("color-picker");
  newD.appendChild(newP);

  newD.style.backgroundColor = newColor;

  var colorContainer = document.body.childNodes[5];
  colorContainer.appendChild(newD, colorContainer.childNodes[colorParams+1]);}

function calculateResult()
{
  var colorArguments = document.getElementsByClassName("color-input");
  var running_sum = 0;
  var curr;
  var red = 0;
  var green = 0;
  var blue = 0;


  for(var i = 0; i < colorArguments.length; i++)
  {
    curr = colorArguments[i].value;
    red = red + hexToDec(curr.charAt(0), curr.charAt(1));
    green = green + hexToDec(curr.charAt(2), curr.charAt(3));
    blue = blue + hexToDec(curr.charAt(4), curr.charAt(5));
  }

  red = red / colorParams;
  green = green / colorParams;
  blue = blue / colorParams;

  return "#".concat(red.toString(16).substr(0,2),green.toString(16).substr(0,2),blue.toString(16).substr(0,2));
}

function hexToDec(firstDig, secondDig)
{
  return hexDigitToInt(firstDig)*16 + hexDigitToInt(secondDig);
}

function hexDigitToInt(digit)
{
  if(digit == '0'){return 0;}
  if(digit == '1'){return 1;}
  if(digit == '2'){return 2;}
  if(digit == '3'){return 3;}
  if(digit == '4'){return 4;}
  if(digit == '5'){return 5;}
  if(digit == '6'){return 6;}
  if(digit == '7'){return 7;}
  if(digit == '8'){return 8;}
  if(digit == '9'){return 9;}
  if(digit == 'a'){return 10;}
  if(digit == 'b'){return 11;}
  if(digit == 'c'){return 12;}
  if(digit == 'd'){return 13;}
  if(digit == 'e'){return 14;}
  if(digit == 'f'){return 15;}
}












//Don't collapse
