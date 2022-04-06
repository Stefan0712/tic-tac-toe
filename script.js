const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
restartBtn.onclick = function refreshPage(){
    window.location.reload();
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