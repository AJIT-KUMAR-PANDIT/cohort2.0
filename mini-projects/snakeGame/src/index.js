const gameBoard = document.getElementById("game-board");
const TotalRows = gameBoard.offsetWidth / 40;
const TotalColumns = gameBoard.offsetHeight / 40;

const snakePosition = [];

const TotalBlocks = TotalRows * TotalColumns;

(() => {
  gameBoard.gridTemplateColumns = `repeat(${TotalColumns}, 1fr)`;
  gameBoard.gridTemplateRows = `repeat(${TotalRows}, 1fr)`;
})();

// ?  Imediately Invoked Function Expression (IIFE)
(() => {
  gameBoard.innerHTML = "";

  for (let i = 0; i < TotalBlocks; i++) {
    const block = document.createElement("div");
    block.classList.add("blocks");
    block.dataset.index = i;

    block.dataset.row = Math.floor(i / TotalColumns);
    block.dataset.column = Math.floor(i % TotalColumns);

    gameBoard.appendChild(block);
  }
})();

// snake position

const snake = document.querySelector(".snake");

(() => {
  for (let i = 0; i < TotalRows; i++) {
    for (let j = 0; j < TotalColumns; j++) {
      //   const block = document.createElement("div");
      //   block.classList.add("blocks");
      //   block.dataset.index = i;

      //   block.dataset.row = Math.floor(i / TotalColumns);
      //   block.dataset.column = Math.floor(i % TotalColumns);

      //   gameBoard.appendChild(block);

      snakePosition.push([i, j]);
      console.log(snakePosition);
    }
  }
})();
