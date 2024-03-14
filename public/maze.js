document.addEventListener('DOMContentLoaded', () => {
    const maze = document.getElementById('maze');
    const player = document.createElement('div');
    player.classList.add('player');
    maze.appendChild(player);

    const cells = [];
    let currentPlayerPosition = 0;

    function createMaze() {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            maze.appendChild(cell);
            cells.push(cell);
        }
    }

    function movePlayer(event) {
        switch (event.key) {
            case 'ArrowUp':
                if (currentPlayerPosition >= 10) {
                    cells[currentPlayerPosition].classList.remove('player');
                    currentPlayerPosition -= 10;
                    cells[currentPlayerPosition].classList.add('player');
                }
                break;
            case 'ArrowDown':
                if (currentPlayerPosition < 90) {
                    cells[currentPlayerPosition].classList.remove('player');
                    currentPlayerPosition += 10;
                    cells[currentPlayerPosition].classList.add('player');
                }
                break;
            case 'ArrowLeft':
                if (currentPlayerPosition % 10 !== 0) {
                    cells[currentPlayerPosition].classList.remove('player');
                    currentPlayerPosition -= 1;
                    cells[currentPlayerPosition].classList.add('player');
                }
                break;
            case 'ArrowRight':
                if (currentPlayerPosition % 10 !== 9) {
                    cells[currentPlayerPosition].classList.remove('player');
                    currentPlayerPosition += 1;
                    cells[currentPlayerPosition].classList.add('player');
                }
                break;
        }
    }

    createMaze();
    window.addEventListener('keydown', movePlayer);
});
