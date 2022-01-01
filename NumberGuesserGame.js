let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  let secretnum = Math.floor(Math.random() * 10);
  return secretnum;
}

const compareGuesses = (humg, compg, secret) => {
  let diffH = Math.abs(secret - humg);
  let diffC = Math.abs(secret - compg);

  if (diffH < diffC || diffH === diffC) {
    return true;
  }
  if (diffC < diffH) {
    return false;
  }
}

const updateScore = strg => {  
  if (strg === 'human') {
    humanScore++;
  }
  if (strg === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

