let board = document.getElementsByClassName("game-board");



let gameBoard = (function() {
    let game = []
    return {game};
})();

const player = function(name) {
    
    return {name};
};

let game = (function() {
    let addMark = (mark) => {
        for(let i=0;i<board.length;i++){
            board[i].addEventListener('click',(e) => {
                e.target.textContent= `${mark}`;
            })
        }         
    }
    return {addMark};
})();

game.addMark('O'); //change X or O

function boardFill(game) {
    let cells = document.querySelectorAll(".cell")
    for(let i=0;i<game.length;i++) {
        cells[i].innerHTML = `${game[i]}`; 
    }
}

boardFill(gameBoard.game);