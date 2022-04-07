const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const saveBtn = document.getElementById("save");
//refresh the page to restart the game. Might chanage later to something better
restartBtn.onclick = function refreshPage(){
    restart();
} 
//player factory function
const Player = (name, option) => {
    let wins = 0;
    return {name, option, wins}
}
const player1 = Player("PLayer 1", "X");
const player2 = Player("Player 2", "O");





const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
//gets player names
p1.onblur = function(){
    player1.name = p1.value;
}

p2.onblur = function(){
    player2.name = p2.value;
}
//sets player names as the names from the start panel
saveBtn.onclick = function(){
    document.getElementById("player1Name").innerHTML = p1.value;
    document.getElementById("player2Name").innerHTML = p2.value;
    document.getElementById("player1option").innerHTML = "X"
    document.getElementById("player2option").innerHTML = "O"




    document.querySelector(".startPanel").style.cssText = "display: none";
}




























//gameboard arr
const empt = "Empty cell"
const boardArr = [empt,empt,empt,empt,empt,empt,empt,empt,empt];
let moveCounter = 0;







var started = false;
startBtn.onclick = function createGameboard(){
    let option = "X";
    //the if check if there is already a gameboard created
    if(started==false){
        started = true;
        const container = document.querySelector(".main-container");
        const game = document.createElement('div');
        game.setAttribute("id","gameBoard");
        container.appendChild(game);
        for(let i=0;i<9;i++){
            const cell = document.createElement('div');
            //set id of current cell to "gameCell+current number"
            cell.setAttribute("id",`gameCell${i}`);
            cell.classList.add("cells");
            cell.addEventListener('click', function(){
                //insert X or O into the cell
                cell.innerText = option;
                //add the option to an array
                boardArr[i]=option;
                //change the option to X or O depending of what was before that
                if(option == "X"){
                    option = "O";
                } else {
                    option = "X";
                };
                moveCounter++;
                winCheck(boardArr, moveCounter);
            })
            
            
            game.appendChild(cell);
        }
    } else{
        //shows an error if you try to create a gameboard after one was already created
        const warning = document.querySelector(".log");
        const error =document.createElement("div");
        error.setAttribute("id","error");
        error.innerText="The game has already started";
        warning.appendChild(error);

    }
    

    


};
let result = 'Restarted';
function winCheck(boardArr, moveCounter){
    
    
    if(boardArr[0] == boardArr[1]&&boardArr[1] == boardArr[2]&&(boardArr[1]=="X"||boardArr[1]=="O")){
        if(boardArr[0]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[3] == boardArr[4]&&boardArr[4] == boardArr[5]&&(boardArr[5]=="X"||boardArr[5]=="O")){
        if(boardArr[3]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[6] == boardArr[7]&&boardArr[7] == boardArr[8]&&(boardArr[8]=="X"||boardArr[8]=="O")){
        if(boardArr[6]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[0] == boardArr[3]&&boardArr[3] == boardArr[6]&&(boardArr[6]=="X"||boardArr[6]=="O")){
        if(boardArr[0]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[1] == boardArr[4]&&boardArr[4] == boardArr[7]&&(boardArr[7]=="X"||boardArr[7]=="O")){
        if(boardArr[1]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[2] == boardArr[5]&&boardArr[5] == boardArr[7]&&(boardArr[7]=="X"||boardArr[7]=="O")){
        if(boardArr[2]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[0] == boardArr[4]&&boardArr[4] == boardArr[8]&&(boardArr[8]=="X"||boardArr[8]=="O")){
        if(boardArr[0]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(boardArr[2] == boardArr[4]&&boardArr[4] == boardArr[6]&&(boardArr[6]=="X"||boardArr[6]=="O")){
        if(boardArr[2]=="X"){
            document.getElementById("winnerText").innerText = `${player1.name} wins`;
            player1.wins++;
            result = `${player1.name} wins`;
            restart(result);
        } else {
            document.getElementById("winnerText").innerText = `${player2.name} wins`;
            player2.wins++;
            result = `${player2.name} wins`;
            restart(result);
        }
    } else if(moveCounter==9){
        document.getElementById("winnerText").innerText = `It is a tie`;
    }


}
function restart(result){
    started = false;
    const logs = document.querySelector(".log");
    const logResult = document.createElement('div');
    logResult.setAttribute("class","logs");
    logResult.innerHTML = result;
    logs.appendChild(logResult);
    document.querySelector(".main-container").removeChild(gameBoard);

    for(let i=0;i<9;i++){
        boardArr[i]=empt;
    }
    moveCounter = 0;
    createGameboard();

}