function computerPlay(){
	return Math.floor(Math.random()*3)===0? "Rock": 
		Math.floor(Math.random()*3)===1? "Paper": "Scissors"; 
}

function playRound(playerSelection, computerPlay){
	//If player wins return 1
	//if player loses return -1 
	//if its a tie return 0
	playerSelection=playerSelection.toLowerCase();
	if(playerSelection==="rock" && computerPlayer==="Scissors"){
		console.log("You Win! Rock beats Scissors.");
		return 1;
	}
	else if(playerSelection==="scissors" && computerPlayer==="Paper"){
		console.log("You Win! Scissors beats Paper.");
		return 1;
	}
	else if( playerSelection==="paper" && computerPlayer==="Rock"){
		console.log("You Win! Paper beats Rock.");
		return 1;
	}
	else if(playerSelection===computerPlayer.toLowerCase()){
		console.log("It's a Tie!");
		return 0;
	}
	else{
		console.log("You Lose:(");
		return -1;
	}
}

function game(){
	rounds=5;
	winner=0;
	for(let i=0;i<rounds;i++){
		playerInput=prompt("Enter your move: ");
		for(playerInput.toLowerCase()!=="rock"|| playerInput.toLowerCase()!=="scissors" playerInput.toLowerCase()!=="paper"){
			playerInput=prompt("Invalid input! Try again: ");
		}
		winner+=playRound(playerInput, computerPlay)

	}
	
	return winner>0? "You won this game!": 
	      winner==0? "You tied this game!": "You lost this game:(";  
}
