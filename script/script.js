
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.border = '1px solid grey';
    row.classList.add('row' + i);
    row.style.display = 'flex';
    row.style.flex = '1';
    document.querySelector('.sketchpad').appendChild(row);
}

for (let j = 0; j < 16; j++) {
    const column = document.createElement('div');
    column.style.border = '1px solid grey';
    column.style.flex = '1';
   
}
