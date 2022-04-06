const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");



function createGameboard(){
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
    }
};

startBtn.onclick = createGameboard();
