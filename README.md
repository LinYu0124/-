這是井字棋遊戲的專案，包含 HTML、CSS 和 JavaScript 實現的網頁遊戲
遊戲玩法

玩家 X 和玩家 O 將輪流點擊棋盤上的格子。

完成三連（橫、直或斜）即可獲勝。

若所有格子都被標記且無人獲勝，遊戲將平局。
點擊「重新開始」按鈕可清空棋盤並重新開始遊戲。
例如：
    0   1   2
 0  X | O | X
   ---+---+---
 1    | O |  
   ---+---+---
 2  O | X | X
 
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
