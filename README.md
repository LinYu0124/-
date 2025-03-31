## 專案介紹
這是井字棋遊戲的專案，包含 HTML、CSS 和 JavaScript 實現的網頁遊戲。玩家可以在瀏覽器中進行互動，支持重置功能和平局檢查。

## 使用方法
1. 下載專案文件，解壓縮。
2. 打開 `index.html` 文件即可在瀏覽器中運行遊戲。
3. 點擊棋盤格子進行遊戲，完成三連可獲勝。

## 技術特色
- 使用 HTML 定義遊戲框架。
- 使用 CSS 設計棋盤樣式。
- 使用 JavaScript 實現遊戲邏輯。

例如：

|     |  0  |  1  |  2  |
|-----|-----|-----|-----|
|  0  |  X  |  O  |  X  |
|-----|-----|-----|-----|
|  1  |     |  O  |     |
|-----|-----|-----|-----|
|  2  |  O  |  X  |  X  |

 
Java簡化後的程式碼(展示遊戲如何檢查勝負)：

function checkWin(board, currentPlayer) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer;
    });
}
