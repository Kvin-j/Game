'use strict'
var highscore = 0;
var rannumber=0;
var score = document.querySelector('.score');
function randomNumber(){
   rannumber=Math.floor(Math.random()*20)+1;        //random number generator
}

const checkbutton = document.querySelector(".check");
randomNumber();
console.log(rannumber);
checkbutton.addEventListener("click", () => {
    const textnumber = document.querySelector('.guess').value;
    if(textnumber == rannumber){                                                    //checks for the correct guess
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.message').textContent = "Correct Answer!!";
        document.querySelector('.highscore').textContent = score.textContent;
        if(highscore<score.textContent){
            highscore = score.textContent;                                          //checks the highscore
        }
    }
    else{
        document.querySelector('body').style.backgroundColor = "#222";
        score.textContent-=1;
    }
})

const againbutton = document.querySelector(".again");

againbutton.addEventListener("click", () => {                                       //resets the game
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.highscore').textContent = highscore;
    score.textContent=20;
    randomNumber();
    document.querySelector('.guess').value="";
    document.querySelector('.message').textContent="Start guessing...";
})