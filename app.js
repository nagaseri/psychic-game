//create needed global variables 

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var wrongGuesses = [ ];
	var alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//the computer picks a letter
	
	var randomIndex = Math.floor(Math.random () * alphabet.length);
	console.log('randomIndex', randomIndex);
	

//the user picks a letter of the alphabet 
//we need to compare the two 

//if they match, the user wins **START WITH EASIEST TASK FIRST**
	//increment wins counter
	//restart game

//if they don't match
	//decrement guess counter
	//if user has guesses left
		//they get to guess again
		//push the wrong letter guessed into array of wrong guesses
	//if user has 0 guesses left
		//user loses
		//restart the game
			//increment loss counter 
			//guess counter resets
		