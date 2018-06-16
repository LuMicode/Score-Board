var btn1 = document.getElementById("btn1");
var btn1display = document.querySelector("#b1");
var b1score = 0;

var btn2 = document.getElementById("btn2");
var btn2display = document.querySelector("#b2"); 
var b2score = 0;

var resetbutton = document.getElementById("reset");

var numInput = document.querySelector("input");

var winningScoreDisplay = document.querySelector("p span");

var gameOver = false;
var winningScore =5;


btn1.addEventListener("click", function(){
    if(!gameOver){
    b1score++;
        if(b1score === winningScore){
            gameOver = true;
            btn1display.classList.add("winner");
        }
    btn1display.textContent = b1score;
    }
});

btn2.addEventListener("click", function(){
    if(!gameOver){
    b2score++;
        if(b2score === winningScore){
            gameOver = true;
            btn2display.classList.add("winner");
        }
    btn2display.textContent = b2score;
    }
});

resetbutton.addEventListener("click", function(){
   reset();
});

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
 
function reset(){
    b1score = 0;
    b2score = 0;
    btn1display.textContent = b1score;
    btn2display.textContent = b2score;
    btn1display.classList.remove("winner");
    btn2display.classList.remove("winner");
    gameOver = false;
}
