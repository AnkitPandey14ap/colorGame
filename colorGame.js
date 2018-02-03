
var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(255, 255, 255)"
]

var colorDisplay=document.querySelector("#colorDisplay");
var pickedColor=colors[3];
colorDisplay.textContent=colors[3];

var squares=document.querySelectorAll(".square");
for (var i = 0; i<squares.length; i++) {
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		console.log(clickedColor+colors[3]);
		if(clickedColor==pickedColor){
			alert("Right "+clickedColor);
		}else{
			alert("Wrong!!");
			console.log(clickedColor+" "+pickedColor);
		}
	});
}