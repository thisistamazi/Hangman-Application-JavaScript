let cities = ['london', 'barcelona', 'moscow', 'tokyo','beijing','osaka', 'istanbul', 'tbilisi', 'paris', 'seoul', 'chicago'];

const hangmanPics = [
  ` 
    
        |
         
         
         
         
  =========`,

  ` 
    
        |
        |
        |
        |
        |
  =========`,

  ` 
    +---+
        |
        |
        |
        |
        |
  =========`,

  ` 
    +---+
    |   |
        |
        |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
        |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`];

  
// We determin a random word from the CITIES array and determin how many letters are in the word and then fill it with '_'
const word = cities[Math.floor(Math.random() * cities.length)];


let beginGame = confirm('Welcome to Hangman Game! You have 10 tries to guess the City.');

if (beginGame === true){
  gameStart();
}else{
  alert('You have left the game! Press F5 to start');
}

function gameStart(){
let answerArray = [];
for (let i = 0; i < word.length; i++){ //we use this loop to cover each letter in the chosen world with '_'
  answerArray[i] = '_';
}


let remainingAttempts = 10;

//This while loop allows us to play game while we have more than 10 attempts and we havent guessed the word
while (remainingAttempts > 0 && answerArray !== word){
  console.log('Guess the city: ' + answerArray.join(' ') + '   ' + 'Remaining attempts: ' + remainingAttempts);
  let guess = prompt('Guess the city or click Cancel to stop playing.')
  let guessLetter = guess.toLowerCase();//if user enters uppercase letter, we need to turn it to lowercase
//We check if we entered the same letter, if we did we return to WHILE loop
  if (answerArray.includes(guessLetter)){
      alert('You have already guessed this letter!');
      continue;
    }
//Here we are eliminating the options if user enters wants to cancel the game, or he enters more then 1 charachter or a number
  if (guess === null){
    break;
  }else if(guess.length !== 1){
    alert('Please enter a Single Letter!')
  }else if(!isNaN(guess)){
    alert('Please enter a Letter!')
  }else{
    
//We want to check if generated word includes the letter that we guessed
    if (word.includes(guessLetter)){
    for (let j = 0; j < word.length; j++){
      if(word[j] === guessLetter){ 
        answerArray[j] = guessLetter;//if the letter that we entered is in the generated word, we put it in answerArray
        console.log('Correct Guess!');
      }
    }
    alert('Correct Guess!   ' + answerArray.join(' ') );
  }else { //if the word doesnt include 
    console.log(hangmanPics[10 - remainingAttempts]);//if we guessed incorrectly, on each incorrect guess we will display new hangman pic
    console.log('Wrong guess!')
    alert('Wrong Guess!   ' + answerArray.join(' ') )
    
    //we are decreasing attempts, on each wrong guess and if we dont have any attemps any more we will loose
    remainingAttempts--;
    if(remainingAttempts === 0){
      console.log('Sorry, but you have lost! Correct guess was:   ' + word);
      alert('Sorry, but you have lost! Correct guess was:   ' + word);
    }
  }

//if we got every letter was right we win the game
  if (answerArray.join('') == word){
    console.log('Congratulations! You have won the game!');
    alert('Congratulations! You have won the game!');
    break;
  }

  }
  
  
}
}









