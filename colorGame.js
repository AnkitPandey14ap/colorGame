
// var colors=generateColors(6);
var colors=[];
var numOfSqrs=6;
var squares;

var colorDisplay=document.querySelector("#colorDisplay");

// var pickedColor=pickColor(6);
var pickedColor;

var resultDisplay=document.querySelector("#resultDisplay");

// colorDisplay.textContent=pickedColor;

var resetBtn=document.querySelector("#reset");
/*var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
*/

init();

function init(){
	var modeButtons=document.querySelectorAll(".mode");
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			if(this.textContent==="Easy"){
				numOfSqrs=3;
			}else
				numOfSqrs=6;

			reset();	
			this.classList.add("selected");
		});

	}

	squares=document.querySelectorAll(".square");
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background=colors[i];

		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.background;
			console.log(clickedColor+colors[3]);
			if(clickedColor==pickedColor){
				changeColor(pickedColor);
				resultDisplay.textContent="Correct!"
				document.querySelector("h1").style.background=clickedColor;
				resetBtn.textContent="Play Again?"

			
			}else{
				this.style.background="#232323";
				resultDisplay.textContent="Try again";
			
				/*console.log(clickedColor+" "+pickedColor);*/
			}
		});
	}
	reset();

}



resetBtn.addEventListener("click",reset);



hardBtn.classList.add("selected");

function changeColor(color){
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background=color;
	}
}



function pickColor(num){
	var random=Math.floor(Math.random()*num);
	console.log(random);
	return colors[random];
}

function generateColors(num){
	var arr=[];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}




function reset(){
	//generate new colors
	colors=generateColors(numOfSqrs);

	//pick a random color
	pickedColor=pickColor(numOfSqrs);

	//set rgb in the great.... line
	colorDisplay.textContent=pickedColor;

	//set colors in squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background="block";
			squares[i].style.background=colors[i]
		}else{
			squares[i].style.background="none";
		}

	}

	resetBtn.textContent="New colors"
	document.querySelector("h1").style.background="steelblue";
	resultDisplay.textContent="";

}

