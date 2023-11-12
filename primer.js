let words=["men","women","child","children","neigbor","student","tree","flower","boat","car","airplane","island","country","city","desk"];
let word=words[Math.floor(Math.random() * words.length) + 1];
let Guesses=5;
let guessesLeft=Guesses;
let revealedLetters=Math.floor(Math.random() * 3) + 1
let usedLetters=document.getElementById("usedLetters");
let wordDisplay=document.getElementById("wordDisplay");
let letterInput=document.getElementById("letterInput");
let attempts=document.getElementById("attempts");
let result=document.getElementById("resultPopup");

let displayWord="";
for (let i=0; i<word.length; i++) {
    if (i<revealedLetters) {
        displayWord+=word[i];
    }
    else {
        displayWord+="_";
    }
}

wordDisplay.textContent=displayWord;

function checkLetter() {
    let letter=letterInput.value.toLowerCase();
    if (word.includes(letter) || usedLetters.textContent.includes(letter)) {
        let newWord="";
        for (let i=0; i<word.length; i++) {
            if (word[i]==letter) {
                newWord += letter;
            }
            else {
                newWord += displayWord[i];
            }
        }
        displayWord=newWord;
        wordDisplay.textContent=displayWord;
        if (!displayedWord.includes("_")) {
            showResultPopup(true);
            disableInput();
        }
    } else {
        guessesLeft--;
        usedLetters.textContent+=(letter + " ");
        attempts.textContent = `Tries ${guessesLeft}`;
        if (guessesLeft==0) {
            showResultPopup(false);
            disableInput();
            displayWord.textContent=word;
        }
    }
    letterInput.value ="";
}

function showResultPopup(success) {
    result.textContent = success ? "You guessed the correct word!" : "You ran out of guesses.";
    result.style.color = success ? "green" : "red";
    result.style.display = "block";
}

function startNewGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessesLeft=Guesses;;
    revealedLetters = Math.floor(Math.random() * 3) + 1;
    displayWord = word.slice(0, revealedLetters) + "_".repeat(word.length - revealedLetters);
    wordDisplay.textContent = displayWord;
    attempts.textContent = `Tries ${attemptsLeft}`;
    resultPopup.style.display = "none";
    usedLetters.textContent = "";
    letterInput.disabled = false;
    document.querySelector('button').disabled = false;
}

function disableInput() {
    letterInput.disabled = true;
    document.querySelector('button').disabled = true;
}