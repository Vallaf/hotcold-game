const beginGame = document.querySelector(".begin-game-btn");
const choiceValidation = document.querySelector("#button-validation");
let numberChosenInput =document.getElementById('choose-number').value;
const displayGameContainer = document.querySelector(".gameplay-container");

beginGame.addEventListener("click",() => {
    beginGame.classList.add("begin-game-btn-clicked");
    displayGameContainer.style.visibility = "visible";
    const mysteryNumber = Math.floor(Math.random() * 100) + 1;
    console.log(mysteryNumber);
})

choiceValidation.addEventListener("click", () => {

   console.log(numberChosenInput);
})





