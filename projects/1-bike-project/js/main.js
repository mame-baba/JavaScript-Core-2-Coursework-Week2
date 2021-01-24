let blueBtn = document.getElementById("blueBtn");

function clickedBtn1() {
  let jumboBtn = document.querySelector(".jumbotron");
  jumboBtn.style.backgroundColor = "#588fbd";
  let donateBikeBtn = document.getElementById("donate-button");
  donateBikeBtn.style.backgroundColor = "#ffa500";
  let volunteerBtn = document.getElementById("volunteer-button");
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
}
// Adding EventListener
blueBtn.addEventListener("click", clickedBtn1);

let orangeButton = document.getElementById("orangeBtn");

function clickedBtn2() {
  let jumboBtn = document.querySelector(".jumbotron");
  jumboBtn.style.backgroundColor = "#f0ad4e";
  let donateBikeBtn = document.getElementById("donate-button");
  donateBikeBtn.style.backgroundColor = "#5751fd";
  let volunteerBtn = document.getElementById("volunteer-button");
  volunteerBtn.style.backgroundColor = "#8c9c08";
}
// adding EventListener
orangeButton.addEventListener("click", clickedBtn2);

let greenButton = document.getElementById("greenBtn");

function clickedBtn3() {
  let jumboBtn = document.querySelector(".jumbotron");
  jumboBtn.style.backgroundColor = "#87ca8a";
  let donateBikeBtn = document.getElementById("donate-button");
  donateBikeBtn.style.backgroundColor = "black";
  let volunteerBtn = document.getElementById("volunteer-button");
  volunteerBtn.style.backgroundColor = "#8c9c08";
}
// adding EventListener
greenButton.addEventListener("click", clickedBtn3);

//Part 2
let subButton = document.getElementById(submit-button);

function formValidation(){
    let formInput = document.getElementsByClassName("form-control");
    for( var i = 0; formValidation.length > 0; i++){
        if(!(formInput[i].value).length > 0){
            formInput[i].style.backgroundColor = "ffb1ad";
        }
    }
}
