
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.border = '1px solid black';
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.boxSizing = 'border-box';
    document.querySelector('.sketchpad').appendChild(square);

}
