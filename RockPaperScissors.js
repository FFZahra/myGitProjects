const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb') {
    return userInput;
  } else {
    console.log("Wrong entry! Please enter 'rock', 'paper', or 'scissors'. ");  
      }
}

const getComputerChoice = () => {
var nTag = Math.floor(Math.random() * 3);
  switch (nTag) {
    case 0:
     compChc = 'rock';
     break;
    case 1:
      compChc = 'paper';
      break;
    case 2:
      compChc = 'scissors';
      break;
    }
    return compChc;
 }

const determineWinner = (userChoice, computerChoice) => {  
  if (computerChoice === userChoice){
    return 'The game is a tie.';
  } else if (userChoice === 'bomb'){
      return 'The user is the winner!';
  } else if(userChoice === 'rock' && computerChoice === 'paper'){
      return 'The computer is the winner!';
  } else if(userChoice === 'rock' && computerChoice === 'scissors'){
      return 'The user is the winner!';
  } else if(userChoice === 'paper'){
       if(computerChoice === 'rock'){
          return 'The user is the winner!';
       } else if(computerChoice === 'scissors'){
          return 'The computer is the winner!';
       }
  } else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer is the winner!';
       } else if(computerChoice === 'paper'){
        return 'The user is the winner!';
            }
      } else {
        return 'No Game - re-enter user choice.';
      }  
}

const playGame = () => {    
 const userChc = getUserChoice('paper');
 const computerChc = getComputerChoice();
 if (userChc === 'bomb') {
   console.log("User's choice: *******");
 } else {
 console.log("User's choice: " + userChc);
 }
 console.log("Computer's choice: " + computerChc);
 return determineWinner(userChc, computerChc);
}

console.log(playGame()); 
