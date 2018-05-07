console.log("connected");
var numb = 6;
var colors =[];
var pickedColor;
var modebuttons = document.querySelectorAll(".mode");
var h2 = document.querySelector("h2");
var colord = document.getElementById("colordisp");	
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");

init();


function init(){
	setupmodebuttons();
	setupsquares();
	resets();
}

function setupmodebuttons(){
	for(var i = 0;i<modebuttons.length; i++){
	modebuttons[i].addEventListener("click" , function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy"? numb = 3: numb = 6;
		resets();
	});
	}
}

function setupsquares(){
	for(var i = 0 ; i <square.length; i++){
	square[i].addEventListener("click" , function(){
		if(this.style.backgroundColor === pickedColor){
			reset.textContent = "Play Again?"
			message.textContent = "Correct";
			changecolor(this.style.backgroundColor);
			}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}	
	})
	}
}
reset.addEventListener("click" ,function(){
	resets();
});

function changecolor(color){
		for(var i = 0 ; i <square.length; i++){
		square[i].style.backgroundColor = color;
		}
		h2.style.backgroundColor = color;
				
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0 ;i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() *256 );
	var g = Math.floor(Math.random() *256 );
	var b = Math.floor(Math.random() *256 );
	return "rgb(" + r + ", " +  g + ", " + b +")";
}


function pickcolor(){
	var randome = Math.floor(Math.random() * colors.length);
	return colors[randome];
}

function resets(){
	colors = generateRandomColors(numb);
	pickedColor = pickcolor();
	colord.textContent = pickedColor; 
	for(var i = 0 ; i <square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";	
		}
	}
	message.textContent = "";
	h2.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
}