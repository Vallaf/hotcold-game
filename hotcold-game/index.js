const mysteryNumber = Math.floor(Math.random() *100) +1;
console.log(mysteryNumber);
const beginGame = document.querySelector(".begin-game-btn");
const displayGameContainer = document.querySelector(".gameplay-container");

beginGame.addEventListener("click",() => {
beginGame.classList.add("begin-game-btn-clicked");
displayGameContainer.style.visibility = "visible";
})



