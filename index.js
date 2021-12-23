//  commencer la partie : faire apparaitre le jeu
const displayGameContainer = document.querySelector(".gameplay-container");
const displayRulesContainer = document.querySelector(".rules-container");
const beginGame = document.querySelector(".begin-game-btn");

// déclarer le nombre à trouver
const mysteryNumber = Math.floor(Math.random() * 100) + 1;
console.log(mysteryNumber);

//
let validButton = document.getElementById('submit');
let numberInput = document.getElementById('number-input');
let resultsDiv =  document.getElementById('result');
let message = document.querySelector('#message');
let numberInputList = [];
const trialsNumber = 10;

beginGame.addEventListener("click", () => {
    beginGame.classList.add("begin-game-btn-clicked");
    displayGameContainer.style.visibility = "visible";
    displayRulesContainer.style.visibility = "hidden";
})

validButton.addEventListener('click', () => {
    if (numberInput.value.trim()) {
        numberInputList.push(parseInt(numberInput.value));
        displayResults();

       if(numberInputList.length === trialsNumber) {
           message.innerText = "GAME OVER"
       } else {
           let inputValue = parseInt(numberInput.value);
           console.log(inputValue);
           if(inputValue < mysteryNumber) {
               message.innerText = "Choisissez un chiffre plus grand";
           } else if( inputValue > mysteryNumber) {
            message.innerText = "Choisissez un chiffre plus petit";
           } else {
            message.innerText = "Vous avez gagné ";
           }
       }
   }
   numberInput.value = "";
});
 
function displayResults() {
resultsDiv.innerHTML ="";
numberInputList.forEach((result)=> {
let div = document.createElement('div');
div.innerText = "Nombre choisi : " + result;
resultsDiv.appendChild(div);
});
}



// function compare() {
//     for (let i = numberInputList.length; i < trialNumber; i++) {
//         if (numberInput < mysteryNumber) {
//             resultText.textContent = 'Choisis un nombre supérieur';
//               } else if (numberInput > mysteryNumber) {
//             resultText.textContent = 'Choisis un nombre inférieur';
//         } else if (numberInput === mysteryNumber) {
//             document.querySelector('#result').textContent = 'Gagné !!!';
//         }
//     }
// }
// choiceValidation.addEventListener("click", () => {
//     numberInputList.push(parseInt(numberInput.value));
//     document.getElementById("number-input").value = "";
//     console.log(numberInputList);
//     compare();

// })

