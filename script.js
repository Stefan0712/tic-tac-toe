//references to DOM components
const startMenu = document.querySelector('.start-menu')
const game = document.querySelector('.game')
const endGame = document.querySelector('.end-game')
const messages = document.getElementById('messages')
const nameInput = document.getElementById('player-name')
const bottomPanel = document.querySelector('.bottom-panel')
 

//the array where player/computer choices will be stored
let boardArr = [
    0,0,0,
    0,0,0,
    0,0,0
]
//score counter
let computerScore = 0;
let playerScore = 0;
let isGameOver = false;
let round = 0;
let playerName = "Player"

// hide/show the correct divs
const startGame = () =>{
    startMenu.classList.toggle('hide')
    if(nameInput.value){
        playerName = nameInput.value
    }
    createGameboard()
}

// creates the gameboard
const createGameboard = () =>{
    const gameboard = document.querySelector('.gameboard')
    for(let i=0;i<9;i++){
        //creates div
        let square = document.createElement('div')
        //gives it an id
        square.setAttribute('id',i)
        //gives it an onClick event handler
        square.setAttribute('onClick',`select(${i})`)
        //append it to the gameboard
        gameboard.appendChild(square)

    }
}
// handle the logic for player selection
const select = (i) =>{
    //do stuff only if the selected square is empty
    if(boardArr[i]===0 && isGameOver === false){
        //changes the value in boardArr
        boardArr[i] = 'p';
        //changes the gameboard from the page by adding "X"
        document.getElementById(i).innerHTML = "x"
        document.getElementById(i).classList.add('x')
        //invokes the checkGame function to check if the game is finished or not
        checkGame('p')
        //invokes the computer function
        computer()
    }else{
        
    }
}
const computer = () =>{
    // finish the game if there are not any empty spaces left
    if(!checkFreeSpaces()){
        finishGame()
        return;
    }
    //pick a random number from - to 8
    let option = Math.round(Math.random()*8)
    //if the choosen number correspond to an already filled space, it will restart the function and pick another number 
    if(boardArr[option]==='p' || boardArr[option]==="c"){
        computer()
    }else{
        //if the space is empty, it assing the "c" letter to the array
        boardArr[option] = 'c'
        document.getElementById(option).innerHTML = "o"
        document.getElementById(option).classList.add('o')
        checkGame('c')
    }
}

//a function that checks if there are any free spaces (free space is represented by a "0")
const checkFreeSpaces = () =>{
    for(i=0;i<9;i++){
        if(boardArr[i] === 0 ){
            return true;
        }

    }
}
//function that handles the end game
const finishGame = (choice) =>{
    if(choice === 'p'){
        //prints the winner and updates the score
        messages.innerHTML = `${playerName} won the game`
        messages.classList.toggle('showMsg')
        playerScore++;
        document.getElementById('player-score').innerHTML = playerScore;
    }else if(choice === 'c'){
        messages.innerHTML = "Computer won the game"
        messages.classList.toggle('showMsg')
        computerScore++;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    //hides the game divs and shows the end game screen.
    //TO-DO make game screen always visible and end/start screen to appear and then disapear on top of the game screen, by having a nice animation
    isGameOver = true;

}

// start a new game
const restartGame = () =>{
    const gameboard = document.querySelector('.gameboard')
    messages.classList.toggle('showMsg')
    messages.innerHTML = ""
    round++;
    gameboard.remove();
    boardArr = [0,0,0,0,0,0,0,0,0];
    isGameOver = false;
    let newGameboard = document.createElement('div')
    newGameboard.classList.add('gameboard')
    bottomPanel.appendChild(newGameboard)
    createGameboard()

}




//checks the winning combinations against the current game array
const checkGame = (choice) =>{

    if(boardArr[0] === choice && boardArr[1] === choice && boardArr[2] === choice){
        finishGame(choice)
    }else if(boardArr[3] === choice && boardArr[4] === choice && boardArr[5] === choice){
        finishGame(choice)
    }else if(boardArr[6] === choice && boardArr[7] === choice && boardArr[8] === choice){
        finishGame(choice)
    }else if(boardArr[0] === choice && boardArr[3] === choice && boardArr[6] === choice){
        finishGame(choice)
    }else if(boardArr[1] === choice && boardArr[4] === choice && boardArr[7] === choice){
        finishGame(choice)
    }else if(boardArr[2] === choice && boardArr[3] === choice && boardArr[8] === choice){
        finishGame(choice)
    }else if(boardArr[0] === choice && boardArr[4] === choice && boardArr[8] === choice){
        finishGame(choice)
    }else if(boardArr[2] === choice && boardArr[4] === choice && boardArr[6] === choice){
        finishGame(choice)
    }
}