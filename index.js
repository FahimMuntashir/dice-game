var randomNum1 = Math.floor(Math.random()*6)+1;

var randomImage="images/dice" +randomNum1 +".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);


var randomNum2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice" +randomNum2 +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


if(randomNum1>randomNum2){

  document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomNum1<randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";

}
else {
  document.querySelector("h1").innerHTML = "draw !";
}
