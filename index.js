var randomNumner1=Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumner1+".png";

var randomImageSource="./images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumner2=Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumner2+".png";

var randomImageSource="./images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

if(randomNumner1>randomNumner2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumner2>randomNumner1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="draw!";
}