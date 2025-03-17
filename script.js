const gridContainer = document.querySelector('.grid-container');
const gridItem = document.createElement('div');
gridItem.setAttribute('class', 'grid-item');

// Creating a 16x16 grid results in 256 items, because 16*16 = 256
for (let index = 0; index < 256; index++) {
    gridContainer.appendChild(gridItem.cloneNode());
}