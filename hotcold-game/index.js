const displayGameContainer = document.querySelector(".gameplay-container");
const displayRulesContainer = document.querySelector(".rules-container");
const beginGame = document.querySelector(".begin-game-btn");

const choiceValidation = document.getElementById('value-submit');
let numberInput = document.getElementById('number-input');
let resultText =  document.getElementById('result');
const mysteryNumber = Math.floor(Math.random() * 100) + 1;
console.log(mysteryNumber);
let numberInputList = [];
const trialNumber = 10;

beginGame.addEventListener("click", () => {
    beginGame.classList.add("begin-game-btn-clicked");
    displayGameContainer.style.visibility = "visible";
    displayRulesContainer.style.visibility = "hidden";
})

function compare() {
    for (let i = numberInputList.length; i < trialNumber; i++) {
        if (numberInput < mysteryNumber) {
            resultText.textContent = 'Choisis un nombre supérieur';
              } else if (numberInput > mysteryNumber) {
            resultText.textContent = 'Choisis un nombre inférieur';
        } else if (numberInput === mysteryNumber) {
            document.querySelector('#result').textContent = 'Gagné !!!';
        }
    }
}
choiceValidation.addEventListener("click", () => {
    numberInputList.push(parseInt(numberInput.value));
    document.getElementById("number-input").value = "";
    console.log(numberInputList);
    compare();

})

