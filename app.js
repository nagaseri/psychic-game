//create global variables 

	var wins = 0;
	var losses = 0;
	var guessesLeft = 3;
	var wrongGuesses = [];
	var computerChoice = "";
	var userChoice = "";

//the computer picks a random letter
	function computerMakesChoice() {
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var randomIndex = Math.floor(Math.random () * alphabet.length);
		console.log('randomIndex', randomIndex);
//the var computer choice is the alphabet randomly chosen
		var computerChoice = alphabet[randomIndex];
		console.log('computerChoice', computerChoice);
	}
//calling the function for computer to make choice
	computerMakesChoice();
	
//function to reset game	
	function gameReset(){
		guessesLeft = 3;
		wrongGuesses = [];
		computerMakesChoice();

	}

//the user picks a letter of the alphabet 
		document.onkeyup = function(event){
			userChoice = event.key;
			//if user guesses right letter, WIN
			//increment wins counter
			//reset guesses left, wrong guesses, and randomize computer choice
			if(userChoice === computerChoice){
				wins++;
				gameReset();
				console.log('wins', wins);
			}
			//if not, guesses left decreases
			//push current user choice to array of wrongguesses
			else {
				guessesLeft--;
				wrongGuesses.push(userChoice);
				console.log('wrongGuesses', wrongGuesses);
				console.log('userChoice', userChoice);
				console.log('guessesLeft', guessesLeft);
			}
			//if there are no guesses left
			//increment loss counter
			//reset game
			if(guessesLeft === 0){
				losses++;
				gameReset();
				console.log('losses', losses);
				console.log('guessesLeft', guessesLeft);
			}
			// if(userChoice === alphabet){
			// 	userChoice.push(wrongGuesses);
			// 	alert("You already guessed this letter, try again!")
			// }
			}


//if they don't match
	//decrement guess counter
	//if user has guesses left
		//they get to guess again
		//push the wrong letter guessed into array of wrong guesses
	//if user has 0 guesses left
		//user loses
		//restart the game **RESET EVERTYTHING EXCEPT WINS AND LOSSES COUNTERS**
			//increment loss counter 
			//guess counter resets
		