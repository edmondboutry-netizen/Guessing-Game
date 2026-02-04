//Pour avoir un nombre aléatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Pour avoir le nombre d'essais
let attempts = 10;

function checkGuess() {
// empeche les essais négatifs
    if (attempts <= 0) {
        return;
    }

    //réduit de 1 à chaque fois le nombre d'essais
    attempts--;

let inputElement = document.getElementById("input");
let feedbackElement = document.getElementById("feedback");

//Converti la valeur en nombre
let guess = Number(inputElement.value);

// si la personne a deviné le nombre, les attemps sont remis à 0
if (guess === randomNumber) {

    attempts = 0;
feedbackElement.innerHTML = "Congratulations !";
feedbackElement.style.color = "green";
return;

    } else if (attempts === 0 && guess != randomNumber) {
    feedbackElement.innerHTML = `Game over ! The correct number was ${randomNumber}.`;
    feedbackElement.style.color = "red";
    return;

    } else if (guess < randomNumber){
feedbackElement.innerHTML = `Too low ! Try again. ${attempts} attempts left.`;
feedbackElement.style.color = "red";
return;

    }else {
feedbackElement.innerHTML = `Too high ! Try again. ${attempts} attempts left.`;
feedbackElement.style.color = "red";
return;
    }


}