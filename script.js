const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// 初始化棋盤
function initializeBoard() {
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.dataset.index = index;
        cellElement.addEventListener('click', handleCellClick);
        boardElement.appendChild(cellElement);
    });
    messageElement.textContent = `玩家 ${currentPlayer} 的回合`;
}

// 處理棋格點擊
function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add('disabled');

    if (checkWin()) {
        messageElement.textContent = `🎉 玩家 ${currentPlayer} 獲勝！`;
        gameActive = false;
    } else if (board.every(cell => cell)) {
        messageElement.textContent = '🤝 平局！';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        messageElement.textContent = `玩家 ${currentPlayer} 的回合`;
    }
}

// 勝負檢查
function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
}

// 重新開始遊戲
resetButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    initializeBoard();
});

// 初始化遊戲
initializeBoard();
