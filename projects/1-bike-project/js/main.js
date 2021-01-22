var blueBtn = document.getElementById("blueBtn");

 function clickedBtn1(){
    var jumboBtn = document.querySelector(".jumbotron");
    jumboBtn.style.backgroundColor = "#588fbd";
    var donateBikeBtn = document.getElementById("donate-button");
    donateBikeBtn.style.backgroundColor = "#ffa500";
    var volunteerBtn = document.getElementById("volunteer-button");
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";

}
// Adding EventListener
blueBtn.addEventListener("click", clickedBtn1);

var orangeButton = document.getElementById("orangeBtn");

function clickedBtn2(){
    var jumboBtn = document.querySelector(".jumbotron");
    jumboBtn.style.backgroundColor = "#f0ad4e";
    var donateBikeBtn = document.getElementById("donate-button");
    donateBikeBtn.style.backgroundColor = "#5751fd";
    var volunteerBtn = document.getElementById("volunteer-button");
    volunteerBtn.style.backgroundColor ="#8c9c08";
}
// adding EventListener
orangeButton.addEventListener("click", clickedBtn2);

var greenButton = document.getElementById("greenBtn");

function clickedBtn3(){
    var jumboBtn = document.querySelector(".jumbotron");
    jumboBtn.style.backgroundColor = "#87ca8a";
    var donateBikeBtn = document.getElementById("donate-button");
    donateBikeBtn.style.backgroundColor = "black";
    var volunteerBtn = document.getElementById("volunteer-button");
    volunteerBtn.style.backgroundColor ="#8c9c08";
}
// adding EventListener
greenButton.addEventListener("click", clickedBtn3);
