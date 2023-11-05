var randomNumber1=Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + randomNumber1+".png"; //dice from 1 to 6

var randomImageSource="images/" +randomDiceImage; // images/dice1 to dice6

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" ,randomImageSource);

var randomnumber2=Math.floor(Math.random() *6)+1;
var randomImageSource2="images/dice" +randomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!🎊✨";
}
else if(randomnumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins!🎊✨";
}
else{
  document.querySelector("h1").innerHTML="Draw match!🤢";
}
