function getGridSize() {
    grid_size = prompt("Enter the size of the grid (between 1 and 100):");
    if (grid_size < 1 || grid_size > 100 || isNaN(grid_size)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(grid_size);
};

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
            const cell_outer = document.createElement('div');
            const cell_inner = document.createElement('div');

            cell_outer.style.border = '0.25px dashed grey';
            cell_outer.style.display = 'flex';
            cell_outer.style.flex = '1 0 auto';
            cell_outer.style.boxSizing = 'border-box';

            cell_inner.style.opacity = '0.0';
            cell_inner.addEventListener('mouseover', changeCellColor);
            cell_inner.style.flex = '1 0 auto';
            cell_inner.style.boxSizing = 'border-box';
            
            row.appendChild(cell_outer);
            cell_outer.appendChild(cell_inner);
        }
    }
};

function changeCellColor(event) {
    event.target.style.backgroundColor = `black`;
    event.target.style.opacity = `${parseFloat(event.target.style.opacity) + 0.1}`;
};

document.querySelector('#input_button').addEventListener('click', getGridSize)


