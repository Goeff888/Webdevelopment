var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset = document.getElementById("reset");
var gameover = false;
var winningscore = 5;

var p1score = 0;
var p2score = 0;

p1button.addEventListener("click", function(){
    if (!gameover){
        p1score++;
        if (p1score === winningscore){
            gameover = true;
        }
        console.log(p1score);
        p1display.textContent = p1score;
    }
});

p2button.addEventListener("click", function(){
    if (!gameover){
        p2score++;
        if (p2score === winningscore){
            gameover = true;
        }
        console.log(p2score);
        p2display.textContent = p2score;
    }
});

reset.addEventListener("click", function(){
    p1score = 0;
    p2score = 0;
    console.log(p2score);
    p1display.textContent = p1score;
    p2display.textContent = p2score;
});