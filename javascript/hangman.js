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
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) { 
    return this.guessedLetters += letter;
   }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if (this.checkClickedLetters(letter)){
      return this.errorsLeft
    } else {
      return this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetters.length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'js', 'react', 'florida', 'paris', 'mexico', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    
  });
}


document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    if (hangman.secretWord.includes(event.key)) {
        let index = hangman.secretWord.indexOf(event.key)
        hangmanCanvas.writeCorrectLetter(index)
         if(hangman.checkWinner()) {
           hangmanCanvas.winner()
         }
      } else {
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
         if(hangman.checkGameOver()){
           hangmanCanvas.gameOver()
         }
      }
  }
});
