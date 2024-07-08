let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(index) {
    if (gameActive && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('gameStatus').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            document.getElementById('gameStatus').innerText = 'Draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (let combination of winningCombinations) {
        if (board[combination[0]] !== '' &&
            board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes('');
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('gameStatus').innerText = '';
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.innerText = '';
    });
}
