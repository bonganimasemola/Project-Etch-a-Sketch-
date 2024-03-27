document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('gridContainer');
    const changeSizeBtn = document.getElementById('changeSize');

    function createGrid(size) {
        container.innerHTML = ''; 
        let squareSize = 960 / size; 
        container.style.width = '960px'; 

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.classList.add('gridSquare');
            square.dataset.darkness = 0; 
            square.addEventListener('mouseover', () => changeColor(square));
            container.appendChild(square);
        }
    }

    function changeColor(square) {
        if (square.dataset.darkness == 0) {
            
            const [r, g, b] = [0, 1, 2].map(() => Math.floor(Math.random() * 256));
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            square.dataset.darkness = 1;
        } else {
            
            let currentDarkness = Math.min(10, parseInt(square.dataset.darkness));
            let factor = 1 - (currentDarkness * 0.1);
            square.style.filter = `brightness(${factor})`;
            square.dataset.darkness = currentDarkness + 1;
        }
    }

    changeSizeBtn.addEventListener('click', () => {
        let newSize = prompt('Enter new size per side for the grid (max 100)', 16);
        newSize = Math.min(100, Math.max(1, newSize)); 
        createGrid(newSize);
    });

    createGrid(16); 
});
