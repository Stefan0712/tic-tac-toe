var started = true;

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const saveBtn = document.getElementById("save");
const xBtn = document.getElementById("xBtn");
const oBtn = document.getElementById("oBtn");
let option = "";
let p2Option;


xBtn.onclick = function(){
    option = xBtn.value;
    p2Option="O";

    xBtn.style.cssText="background-color: #F38BA0";
    oBtn.style.cssText="background-color: #FFBCBC";
}
oBtn.onclick = function(){

    option = oBtn.value;
    p2Option="X";

    oBtn.style.cssText="background-color: #F38BA0";
    xBtn.style.cssText="background-color: #FFBCBC";
} 


//refresh the page to restart the game. Might chanage later to something better
restartBtn.onclick = function refreshPage(){
    restart("Restarted");
} 
//player factory function
const Player = (name="empty", option) => {
    let wins = 0;
    return {name, option, wins}
}
const player1 = Player(option);
const player2 = Player("AI",p2Option);






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
saveBtn.onclick = function panel(){
    if(/[A-Za-z0-9]/.test(p1.value)==false){
        console.log("IF is working")
        const err = document.getElementById("player1");
        err.style.cssText = "border: 2px red solid";

        
    } else {
    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("player2Name").innerHTML = player2.name;
    document.getElementById("player1option").innerHTML = option;
    document.getElementById("player2option").innerHTML = p2Option;
    document.getElementById("winnerText").innerHTML = "Please press start"

    started = false;


    document.querySelector(".startPanel").style.cssText = "display: none";
    }
    
}




























//gameboard arr
const empt = "Empty cell"
const boardArr = [empt,empt,empt,empt,empt,empt,empt,empt,empt];
let moveCounter = 0;







startBtn.onclick = function createGameboard(){
    document.getElementById("winnerText").innerHTML = "";
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
            cell.addEventListener('click', handleClick(){
                //insert X or O into the cell
                cell.innerText = option;
                //add the option to an array
                boardArr[i]=option;
                //change the option to X or O depending of what was before that
                cell.removeEventListener("onclick",handleClick);
                moveCounter++;
                winCheck(boardArr, moveCounter);
                ai(boardArr,option);
                
            })
            
            
            game.appendChild(cell);
        }
    } else{
        //shows an error if you try to create a gameboard after one was already created
        const warning = document.querySelector(".log");
        const error =document.createElement("div");
        error.setAttribute("id","error");
        error.innerText="The game can't start";
        warning.appendChild(error);

    }
    

    


};
/* I' trying a new way to check for winning combination
let winComb =   [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [4,3,6]
                ];
let garr = [
    [boardArr[0],boardArr[1],boardArr[2]],
    [boardArr[3],boardArr[4],boardArr[5]],
    [boardArr[6],boardArr[7],boardArr[8]]
];
for(let i=0;i<7;i++){
    
}
*/

let result = 'Restarted';
function winCheck(boardArr, moveCounter){
    
    
    if(boardArr[0] == boardArr[1]&&boardArr[1] == boardArr[2]&&(boardArr[1]=="X"||boardArr[1]=="O")){
        if(boardArr[0]==option){
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
        if(boardArr[3]==option){
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
        if(boardArr[6]==option){
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
        if(boardArr[0]==option){
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
        if(boardArr[1]==option){
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
        if(boardArr[2]==option){
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
        if(boardArr[0]==option){
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
        if(boardArr[2]==option){
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
    if(!document.getElementById("gameBoard")){
        document.getElementById("winnerText").innerHTML = "Please press START"
        restart();
    }
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

function ai(boardArr,option){
    let aiOption ='';
    if(option=="X"){
        aiOption = "O";
    } else {
        aiOption = "X";
    }
    let pos = Math.floor(Math.random(1)*8);
    if(boardArr[pos]==empt){
        boardArr[pos]=aiOption;
        document.getElementById(`gameCell${pos}`).innerHTML = aiOption;
        document.getElementById(`gameCell${pos}`).removeEventListener("onclick",handleClick);
    }else {
        ai(boardArr,option);
    }
    winCheck(boardArr, moveCounter);
    console.log("pos "+pos);
    console.log("option "+option);
    console.log("aiOption "+aiOption);
}
