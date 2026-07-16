function getGridSize() {
    grid_size = prompt("Enter the size of the grid (between 1 and 100):");
    if (grid_size < 1 || grid_size > 100 || isNaN(grid_size)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(grid_size);
}

function createGrid(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flex = '1 0 auto';
        row.style.border = '0.25px dashed grey';
        row.style.height = parseFloat(sketchpad.style.height) / size + 'px';
        row.style.boxSizing = 'border-box';
        sketchpad.appendChild(row);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.addEventListener('mouseover', changeCellColor);
            cell.style.flex = '1 0 auto';
            cell.style.border = '0.25px dashed grey';
            cell.style.boxSizing = 'border-box';
            row.appendChild(cell);
        }
    }
}

function changeCellColor(event) {
    event.target.style.backgroundColor = 'black';
}


let grid_size = 0; // Global variable to store the grid size

document.querySelector('#input_button').addEventListener('click', getGridSize)


