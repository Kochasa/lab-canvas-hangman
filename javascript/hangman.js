class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord =this.words[Math.floor(Math.random() * this.words.length)]
      this.letters = []
      this.guessedLetters = ""
      this.errorsLeft = 10
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
    }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 99){
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) { 
    return this.guessedLetters += letter;
   }

  addWrongLetter(letter) {
    if (this.checkClickedLetters(letter)){
      return this.errorsLeft
    } else {
      return this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
