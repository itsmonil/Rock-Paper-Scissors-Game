// Initialize user and computer scores
let userScore = 0;
let computerScore = 0;

// Select all elements with the class "choice" (Rock, Paper, Scissors buttons)
const choices = document.querySelectorAll('.choice');
const mess = document.querySelector('#message');
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#comp-score');

// Function to generate a random choice for the computer
const genComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']; // Array of possible choices
    const randIdx = Math.floor(Math.random() * 3); // Generate a random index (0, 1, or 2)
    return choices[randIdx]; // Return the randomly selected choice
}

// Function to handle a draw scenario
const drawGame = () => {
    console.log("Game was a draw");
    mess.innerHTML = "Game was a Draw. Play Again";
    mess.style.backgroundColor = "black";
}

// Function to update scores and display the winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++; // Increase user's score
        userScoreSpan.innerText = userScore; // Update the user's score on the page
        mess.innerHTML = `You Win! Your ${userChoice} beats ${computerChoice}`;
        mess.style.backgroundColor = "green";
        console.log("User Wins");
    } else {
        computerScore++; // Increase computer's score
        computerScoreSpan.innerText = computerScore; // Update the computer's score on the page
        mess.innerHTML = `You Lost. ${computerChoice} beats your ${userChoice}`;
        mess.style.backgroundColor = "red";
        console.log("Computer Wins");
    }
}

// Function to play the game when the user selects an option
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    
    // Generate the computer's choice
    const computerChoice = genComputerChoice();
    console.log("Computer Choice =", computerChoice);

    // If both choices are the same, it's a draw
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        // Determine the winner correctly
        let userWin = 
            (userChoice === 'rock' && computerChoice === 'scissors') || 
            (userChoice === 'paper' && computerChoice === 'rock') || 
            (userChoice === 'scissors' && computerChoice === 'paper');

        // Display the winner and update scores
        showWinner(userWin, userChoice, computerChoice);
    }
}

// Add event listeners to all choice buttons
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id'); // Get the ID of the clicked button (rock, paper, or scissors)
        playGame(userChoice); // Call playGame with the selected choice
    });
});
