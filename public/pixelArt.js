//When the paint brush is pressed, open the modal
var createButton = document.getElementById("create-drawing-button");
createButton.addEventListener("click", openModal);

//When the x is pressed, exit the modals
var xButton = document.getElementsByClassName("modal-close-button");
for(var i = 0; i < xButton.length; i++)
{xButton[i].addEventListener("click", closeModal);}

//When the cancel button is pressed, exit the modal
var cancelButton = document.getElementsByClassName("modal-cancel-button");
for(var i = 0; i < cancelButton.length; i++)
{cancelButton[i].addEventListener("click", closeModal);}

//When the back button is pressed, return to color select screen
var backButton = document.getElementsByClassName("modal-rechoose-button");
backButton[0].addEventListener("click", reChoose);

//When the accept button is pressed, finish the drawing
var acceptButton = document.getElementsByClassName("modal-accept-button");
for(var i = 0; i < acceptButton.length; i++)
{acceptButton[i].addEventListener("click", submit);}

//Once a color is selected, update the colorChoice variable
var colorChoiceButton = document.getElementsByClassName("color-choice-button");
for(var i = 0; i < colorChoiceButton.length; i++)
{colorChoiceButton[i].addEventListener("click", updateColorChoice);}

//Let the user choose a custom color to draw with
var customColorInput = document.getElementById("customColor");
customColorInput.addEventListener("keyup", updateCustomColor);

var customColorInputParent = customColorInput.parentNode;
customColorInputParent.addEventListener("click", updateCustomColor);


//Once a color is confirmed, open the modal for drawing
var confirmColorButton = document.getElementsByClassName("modal-confirm-button");
confirmColorButton[0].addEventListener("click", startDrawing);


//When a box is "moused over", change its color
var boxes = document.getElementsByClassName("box");
for(var i = 0; i < boxes.length; i++)
{boxes[i].addEventListener("mouseover", colorize);}

var openDrawingButton = document.getElementsByClassName("drawing-select-button");
openDrawingButton[0].addEventListener("click", openDrawing);

var openMe = -1;
var colorChoice =-1;

//open the color selection modal
function openModal(flag)
{
	var backdrop = document.getElementById("modal-backdrop");
  var choiceModal = document.getElementById("choose-color-modal");

  backdrop.classList.remove("hidden");
  choiceModal.classList.remove("hidden");
}

//Update the color the user has selected
function updateColorChoice(event)
{
	unselectEverything();

  colorChoice = (event.target.id);
	if(event.target.id == "customColor"){event.target.parentNode.classList.add("selected");}
	else{event.target.classList.add("selected");}
}

function unselectEverything()
{
	var selectedItems = document.getElementsByClassName("selected");
	for(var i = 0; i < selectedItems.length; i++)
	{selectedItems[i].classList.remove("selected");}
	document.getElementById("customColor").classList.remove("selected");

	openMe = -1;
	colorChoice = -1;
}

function updateCustomColor()
{
  var input = '#';
	if(event.target.id == "customColor")
	{
  	input = input.concat(event.target.value);
  	event.target.parentNode.style.backgroundColor = (input);
		if(input == '#'){event.target.parentNode.style.backgroundColor = ("#fff");}

	}
	else {input = input.concat(event.target.childNodes[3].value);}

	colorChoice = input;
}


//Hide the color choice modal and open the drawing modal
function startDrawing()
{
	if(colorChoice == -1){window.alert("You must select a color");}

	else if(illegalColor(colorChoice)){window.alert("The custom color you entered is invalid. Try again");}

	else {
		var choiceModal = document.getElementById("choose-color-modal");
		choiceModal.classList.add("hidden");

		var canvas = document.getElementById("drawing-modal");
		canvas.classList.remove("hidden");
	}
}

//check if the color argument provided is a valid hexadecimal color code
function illegalColor(testMe)
{
	if(testMe.length != 7){return true;}
	for(var j = 1; j < testMe.length; j++)
	{
		if(testMe.charCodeAt(j) < 58 && testMe.charCodeAt(j) > 47) {return false;}
  	else if (testMe.charCodeAt(j) < 103 && testMe.charCodeAt(j) > 96) {return false;}
  	else{return true;}
	}
}

//Close the drawing board and open the color select modal
function reChoose()
{
	unselectEverything();

  var canvas = document.getElementById("drawing-modal");
  canvas.classList.add("hidden");

  var choiceModal = document.getElementById("choose-color-modal");
  choiceModal.classList.remove("hidden");
}

//Change the color of a box
function colorize(event)
{
  var mousedOverBox = event.target;
	mousedOverBox.style.backgroundColor = colorChoice;
}

//Rehide the modal by clicking on the x in the corner
function closeModal()
{
	unselectEverything();
	customColorInput.value ="";
	customColorInputParent.style.backgroundColor = "#fff";
  for(var i = 0; i < boxes.length; i++){boxes[i].style.backgroundColor = "#eee";}

	//Hide modal
	var backdrop = document.getElementById("modal-backdrop");
	var choice = document.getElementById("choose-color-modal");
  var canvas = document.getElementById("drawing-modal");

	backdrop.classList.add("hidden");
  choice.classList.add("hidden");
  canvas.classList.add("hidden");
}

var numDrawings = 0;
//Add the drawing to the list of previous drawings
function submit()
{
	var museum = document.body.childNodes[5];

	var newDrawing = document.createElement("div");
	newDrawing.classList.add("new-drawing");


	var miniBoxRows = new Array(11);

	for(var i = 0; i < 11; i++)
	{
		miniBoxRows[i] = document.createElement("div");
		miniBoxRows[i].classList.add("mini-box-row");

		var miniBoxes = new Array(20);
		for(var j = 0;  j < 20; j++)
		{
			miniBoxes[j] = document.createElement("div");
			miniBoxes[j].classList.add("mini-box");
			miniBoxes[j].style.backgroundColor = boxes[(i*20)+j].style.backgroundColor;
			miniBoxRows[i].appendChild(miniBoxes[j]);
		}

		newDrawing.appendChild(miniBoxRows[i]);
	}

	newDrawing.addEventListener("click", selectDrawing);
	museum.insertBefore(newDrawing, museum.childNodes[numDrawings+2]);
	numDrawings++;

	closeModal();
}

//select an old drawing
function selectDrawing(event)
{
	unselectEverything();
	var event2 = event.target;
	while(event2.classList[0] != "new-drawing"){event2 = event2.parentNode;}
	event2.classList.add("selected");
	openMe = event2;
}

//open the selected old drawing
function openDrawing()
{
	if(numDrawings == 0){window.alert("You need to make a drawing before editing an old one.");}
	else if(openMe == -1){window.alert("You must select a drawing.");}
	else {
		var canvas = document.getElementById("drawing-modal");
		canvas.classList.remove("hidden");
		var backdrop = document.getElementById("modal-backdrop");
		backdrop.classList.remove("hidden");


		for(var i = 0; i < 11; i++)
		{
			for(var j = 0;  j < 20; j++)
			{
				boxes[(i*20)+j].style.backgroundColor = openMe.childNodes[i].childNodes[j].style.backgroundColor;
			}
		}
	}
}







//Don't collapse text editor
