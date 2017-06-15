//create global variables 

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var wrongGuesses = [];
	var computerChoice = "";
	var userChoice = "";

//the computer picks a random letter
	function computerMakesChoice() {
		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var randomIndex = Math.floor(Math.random () * alphabet.length);
//the var computer choice is the alphabet randomly chosen
		computerChoice = alphabet[randomIndex];
		console.log('computerChoice', computerChoice);
	}

// function to reset game	
	function gameReset(){
		guessesLeft = 10;
		wrongGuesses = [];
		computerMakesChoice();
	}

//the user picks a letter of the alphabet 
		document.onkeyup = function(event) {
			//the key the user presses becomes userChoice
			userChoice = event.key;
			// var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userChoice);
			//if user guesses right letter, WIN
			//increment wins counter
			//reset guesses left, wrong guesses, and randomize computer choice
			if(userChoice === computerChoice){
				wins++;
				alert("Awesome, you are psychic!");
				document.querySelector('#wins').innerHTML = "Wins: " + wins;
				console.log('wins', wins);
				console.log(computerChoice);
				gameReset();
			}	
			else if(guessesLeft === 0){
				losses++;
				document.querySelector('#losses').innerHTML = "Losses: " + losses;
				alert("You are not psychic! That's okay.");
				console.log('losses', losses);
				console.log('guessesLeft', guessesLeft);
				console.log(computerChoice);
				gameReset();
			}
			// if not, guesses left decreases
			// push current user choice to array of wrongguesses
			else {
				guessesLeft--;
				wrongGuesses.push(userChoice);
				document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
				document.querySelector('#wrongGuesses').innerHTML = "Letters used: " + wrongGuesses;
				console.log('wrongGuesses', wrongGuesses);
				console.log('userChoice', userChoice);
				console.log('guessesLeft', guessesLeft);
				console.log(computerChoice);
			}}

			gameReset();
		

		