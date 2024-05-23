function startGame() {
  let min = 1; 
  let max = 100; 
  let guess; 
  let attempts = 0; 

  function makeGuess() {
    guess = Math.floor((min + max) / 2); 
    let userInput = prompt(
      `Is your number ${guess}? (Type 'higher', 'lower', or 'correct')`
    );

    if (userInput === "higher") {
      min = guess + 1; 
    } else if (userInput === "lower") {
      max = guess - 1; 
    } else if (userInput !== "correct") {
      alert("Invalid input. Please type 'higher', 'lower', or 'correct'.");
      makeGuess(); 
      return;
    }

    attempts++; 
    if (userInput !== "correct") {
      makeGuess(); 
    } else {
      alert(`Your number is ${guess}. It took ${attempts} attempts.`); 
    }
  }

  makeGuess(); 
}
