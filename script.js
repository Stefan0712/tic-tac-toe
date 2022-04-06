const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const saveBtn = document.getElementById("save");
restartBtn.onclick = function refreshPage(){
    window.location.reload();
} 
const Player = (name, option) => {
    let wins = 0;
    return {name, option, wins}
}
const player1 = Player("PLayer 1", "X");
const player2 = Player("Player 2", "O");





const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");

p1.onblur = function(){
    player1.name = p1.value;
}

p2.onblur = function(){
    player2.name = p2.value;
}

saveBtn.onclick = function(){
    document.getElementById("player1Name").innerHTML = p1.value;
    document.getElementById("player2Name").innerHTML = p2.value;


    document.querySelector(".startPanel").style.cssText = "display: none";
}
































var started = false;
startBtn.onclick = function createGameboard(){
    if(started==false){
    started = true;
    const container = document.querySelector(".main-container");
    const game = document.createElement('div');
    game.setAttribute("id","gameBoard");
    container.appendChild(game);
    for(let i=1;i<=9;i++){
        const cell = document.createElement('div');
        cell.setAttribute("id",`gameCell${i}`);
        cell.classList.add("cells");
        cell.addEventListener('click', function(){
            cell.innerText = "X";
        })
        game.appendChild(cell);
    }} else{
        const warning = document.querySelector(".log");
        const error =document.createElement("div");
        error.setAttribute("id","error");
        error.innerText="The game has already started";
        warning.appendChild(error);

    }
};