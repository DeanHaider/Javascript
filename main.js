var wordsList = [
    "matt",
    "steve",
    "jason",
    "maichael",
    "erik",
    "jordan",
    "ari",
    "maja",
  ];

var chosenWord = "";

    var lettersInChosenWord = [];
    var blanksAndSuccesses = [];
    var wrongGuesses = [];

  var numBlanks = 0;
  var winCounter = 0;
  var lossCounter = 0;
  var numGuesses = 10;


        function startGame() {
        numGuesses = 10;

            chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
            lettersInChosenWord = chosenWord.split("");
            numBlanks = lettersInChosenWord.length;
            console.log(chosenWord);
            blanksAndSuccesses = [];
            wrongGuesses = [];
  
            for (var i = 0; i < numBlanks; i++) {
            blanksAndSuccesses.push("_");
            }
  
    
    console.log(blanksAndSuccesses);
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  }
    
    function checkLetters(letter) {
        var letterInWord = false;

            for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
            letterInWord = true;
            }
        }
  
        if (letterInWord) {
            for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
            blanksAndSuccesses[i] = letter;
            }
        }
       
        console.log(blanksAndSuccesses);
    }

    else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
  }
