let chances = 0;

function startGame() {
  while (chances < 10) {
    let number = Math.floor((Math.random() * 20) + 1);
    let guess = prompt("Guess a number between 1 and 100:");
    if (guess == number) {
      alert("Congratulations, you guessed the number!");
      break;
    } else if (guess > number) {
      alert("Too high. You have " + (10 - ++chances) + " chances left.");
    } else if (guess < number) {
      alert("Too low. You have " + (10 - ++chances) + " chances left.");
    }
  }
  if (chances == 10) {
    alert("You lost");
  }
}
