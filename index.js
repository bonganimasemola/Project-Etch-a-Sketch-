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
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black'; 
            });
            container.appendChild(square);
        }
    }

    changeSizeBtn.addEventListener('click', () => {
        let newSize = prompt('Enter new size per side for the grid (max 100)', 16);
        newSize = Math.min(100, Math.max(1, newSize)); 
        createGrid(newSize);
    });

    createGrid(16); 
});
