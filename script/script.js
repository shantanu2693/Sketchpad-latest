function getGridSize() {
    grid_size = prompt("Enter the size of the grid (between 1 and 100):");
    if (grid_size < 1 || grid_size > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(grid_size);
}

function createGrid(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = ''; // Clear existing grid
    
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.border = '1px solid black';
        square.style.width = 50vw / size + 'px';
        square.style.height = 50vh / size + 'px';
        square.style.boxSizing = 'border-box';
        sketchpad.appendChild(square);
    }
}

let grid_size = 0; // Global variable to store the grid size

document.querySelector('#input_button').addEventListener('click', getGridSize)


