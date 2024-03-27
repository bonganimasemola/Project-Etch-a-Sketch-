document.addEventListener('DOMContentLoaded', () =>  {
    const container = document.getElementById('gridContainer');
    const changeSizeBtn = document.getElementById('changeSize');

    function createGrid(size) {
        container.innerHTML = '';
        let smallerSquare = 960 / size;
        container.style.width = '960px';

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.style.width = `${smallerSquare}px`;
            square.style.height = `${smallerSquare}px`;
            
    }
