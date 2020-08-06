class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    //Canvas is in the index html as 1200x800
    this.context.clearRect(0,0,1200,800);
    this.drawLines()
  }

  drawLines() {
    let xPosition = 400
    let yPosition = 600
    this.context.beginPath();
    for (let i=0; i<this.secretWord.length; i++) {
      this.context.moveTo(xPosition,yPosition);
      this.context.lineTo(xPosition+30,yPosition);
      xPosition+=45;
    }
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    
   }

  writeWrongLetter(letter, errorsLeft) {
    
  }

  drawHangman(errorsLeft) {
    
  }

  gameOver() {
    let img = new Image();
    img.src = "/images/gameover.png"
    img.addEventListener('load', () => {
      this.context.drawImage(img, 200, 0, 600, 400);
    })
  }

  winner() {
    let img = new Image();
    img.src = "/images/awesome.png"
    img.addEventListener('load', () => {
      this.context.drawImage(img, 200, 0, 600, 400);
    })
  }
}

