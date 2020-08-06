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
      xPosition+=60;
    }
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    let xPosition = 400
    let yPosition = 600
    
   }

  writeWrongLetter(letter, errorsLeft) {
    
  }

  drawHangman(errorsLeft) {
    this.context.strokeStyle = 'black';
    switch(errorsLeft) {
      case 9: 
      
      this.context.beginPath();
      this.context.moveTo(100, 600);
      this.context.lineTo(200, 600);
      this.context.stroke();
      break;
    case 8:
      
      this.context.moveTo(200, 600);
      this.context.lineTo(150, 570);
      this.context.stroke();
      break;
    case 7:
      
      this.context.moveTo(150, 570);
      this.context.lineTo(100, 600);
      this.context.stroke();
      break;
    case 6:
      
      this.context.moveTo(150, 570);
      this.context.lineTo(150, 100);
      this.context.stroke();
      break;
    case 5:
      
      this.context.moveTo(150, 100);
      this.context.lineTo(450, 100);
      this.context.stroke();
      break;
    case 4:
      
      this.context.moveTo(450, 100);
      this.context.lineTo(450, 150);
      this.context.stroke();
      break;
    case 3:
      
      this.context.beginPath();
      this.context.arc(450, 190, 40, 0, 2 * Math.PI);
      this.context.stroke();
      this.context.closePath();
      break;
    case 2:
      
      this.context.beginPath();
      this.context.moveTo(450, 230);
      this.context.lineTo(450, 400);
      this.context.stroke();
      break;
    case 1:
      
      this.context.moveTo(450, 400);
      this.context.lineTo(400, 450);
      this.context.stroke();
      break;
    case 0:
      
      this.context.moveTo(450, 400);
      this.context.lineTo(500, 450);
      this.context.stroke();
      break;
    }
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

