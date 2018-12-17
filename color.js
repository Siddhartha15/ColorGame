// 
var numSquares=6;
var colors= generateRandomcolors(6);
var squares=document.querySelectorAll(".square");

var pickedcolor= randomColor();

var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedcolor;

var messageDisplay = document.querySelector("#messageDisplay");

var Easybtn = document.querySelector("#Easy");
var Hardbtn = document.querySelector("#Hard");

Easybtn.addEventListener("click",function(){
	Easybtn.classList.add("selected");
	Hardbtn.classList.remove("selected");
	numSquares=3;
	colors= generateRandomcolors(numSquares);
	pickedcolor= randomColor();
	colorDisplay.textContent=pickedcolor;
	for (var i =0;i<3;i++) {
	squares[i].style.backgroundColor=colors[i];
	}
	for (var i =0;i<3;i++) {
	squares[i+3].style.backgroundColor="#232323";
	}
});
Hardbtn.addEventListener("click",function(){
	Easybtn.classList.remove("selected");
	Hardbtn.classList.add("selected");
	numSquares=6;
	colors= generateRandomcolors(numSquares);
	pickedcolor= randomColor();
	colorDisplay.textContent=pickedcolor;
	for (var i =0;i<6;i++) {
	squares[i].style.backgroundColor=colors[i];
	}
});

var resetBtn=document.querySelector("#reset");
resetBtn.addEventListener("click",function(){
	colors= generateRandomcolors(numSquares);
	resetBtn.textContent="New colors";
	messageDisplay.textContent="";
	pickedcolor= randomColor();
	colorDisplay.textContent=pickedcolor;
	for (var i =0;i<squares.length;i++) {
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.backgroundColor="#232323";
	}
	document.querySelector("h1").style.backgroundColor="steelblue";
	
});

for (var i =0;i<squares.length;i++) {
	squares[i].style.backgroundColor=colors[i];
	//add quick listeners to squares
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if( clickedColor === pickedcolor)
		{
			messageDisplay.textContent="Correct!!";
			changeColor(clickedColor);
			resetBtn.textContent="Play Again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}



function changeColor(color) {
	for( var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
	document.querySelector("h1").style.backgroundColor=color;
}

function randomColor() {
	var rand=Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function generateRandomcolors(num) {
	var arr=[];
	for(var i=0; i< num;i++)
	{
		arr.push(getColor());
	}	
	return arr;
}

function getColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}