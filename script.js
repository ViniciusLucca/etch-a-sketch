const gridContainer = document.querySelector('.grid-container');
const gridItem = document.createElement('div');
// This stylesheet is necessary to adjust the items size
const styleSheet = document.createElement('style');
gridItem.setAttribute('class', 'grid-item');

function createGridItems(gridSize){
    deleteGridItems();

    let totalItems = gridSize*gridSize;
    // Input validation
    if (gridSize > 100 || gridSize < 1){
        alert("Size invalid (must be between 1 and 100).");
        return;
    }
    /*  This calculates the size the items 
        should occupy in the container
    */
    let itemsSize = 100/gridSize;
    // Set how many items should be in a line before wrapping
    
    let gridItemStyle = `.grid-item{ flex-basis: ${itemsSize}%; }`;
    styleSheet.textContent = gridItemStyle;
    document.head.appendChild(styleSheet);

    for (let index = 0; index < totalItems; index++) {
        gridContainer.appendChild(gridItem.cloneNode());
    }
}
function deleteGridItems(){
    gridContainer.innerHTML     = '';
}
// Painting feature 
/*  We add the hovering effect to
    the parent because the children will inherit it 
*/
gridContainer.addEventListener('mouseover', paintBlock)

function paintBlock(event){
    event.target.setAttribute('style', 'background-color: aquamarine');
}

createGridItems(16);