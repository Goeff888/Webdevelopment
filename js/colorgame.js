
var colors= generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy= document.querySelector("#easy");
var hard = document.querySelector("#hard");
var numSquares = 6;

reset.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = colors[i]; 
 }
 h1.style.background = "steelblue";
 reset.textContent ="Neue Farben";
});

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    console.log(colors);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    reset.textContent ="Neue Farben";
    for (var i = 0; i< colors.length; i++){
     if (colors[i]< 3){
       squares[i].style.backgroundColor = colors[i];
      }else{
        squares[i].style.display = "none";
      }
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    console.log(colors,pickedColor);
    colordisplay.textContent = pickedColor;
    for (var i = 0; i< colors.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
      reset.textContent ="Neue Farben";
    }    
});

colordisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            h1.style.background = pickedColor;
            reset.textContent ="Nochmal?";
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";

        }
    });
}

function changeColors(color){
    for (var i = 0; i <colors.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i<num;i++){
        arr.push(randomColor());
    } 
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", "+ g +", "+ b +")";
}