var player1 = prompt("Please enter the name of Player 1");
document.querySelector("#p1").innerText = player1;
var player2 = prompt("Please enter the name of Player 2");
document.querySelector("#p2").innerText = player2;
var randonnum= Math.floor(Math.random()*6+1);
var randonnum1= Math.floor(Math.random()*6+1);
var randomimg = "./images/dice"+ randonnum+ ".png";
var randomimg1 = "./images/dice"+ randonnum1+ ".png";
document.querySelector(".img1").setAttribute("src",randomimg);

document.querySelector(".img2").setAttribute("src",randomimg1);

