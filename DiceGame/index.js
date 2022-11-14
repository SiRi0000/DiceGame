
//throw left dice
var randomNumber1 = Math.floor((Math.random()*6)+1); //random number 1-6

var img1 = document.querySelector(".img1");

img1.setAttribute("src", "images/dice"+randomNumber1+".png");//change images btw dice1-6

//throw right dice
var randomNumber2 = Math.floor((Math.random()*6)+1); // random number 1-6

var img2 = document.querySelector(".img2");

img2.setAttribute("src", "images/dice"+randomNumber2+".png");


if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "🚩Player 1 Wins!"
}else {
    document.querySelector("h1").innerText = "Draw!"
}