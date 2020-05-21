var randomNum1 = Math.floor(Math.random()*6)+1;

var randomImage="images/dice" +randomNum1 +".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImage);
