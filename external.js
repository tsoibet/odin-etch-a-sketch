const gridContainer = document.querySelector('#gridContainer');

setGrid(16);

function setGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', `gridRow-${i+1}`);
        createDiv.setAttribute('class', 'gridRow');
        gridContainer.appendChild(createDiv);
    
        for (let j = 0; j < gridSize; j++) {
            const createDiv = document.createElement('div');
            createDiv.setAttribute('id', `square-${i+1}-${j+1}`);
            createDiv.setAttribute('class', 'square');
            // METHOD 1: ADD EVENT LISTENER TO EACH SQUARE CREATED
            createDiv.addEventListener('mousemove', drawPixel);
            const gridRow = document.querySelector(`#gridRow-${i+1}`);
            gridRow.appendChild(createDiv);
        }
    }
}

/*  

METHOD 2: SELECTS ALL SQUARES AND ADD EVENT LISTENER TO EACH

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mousemove', drawPixel));

*/

function drawPixel() {
    this.classList.add("draw");
}

// CREATE CLEAR BUTTON
const createButton = document.createElement('button');
createButton.setAttribute('id', 'clearButton');
createButton.textContent = "Clear";
createButton.addEventListener('click', clearGrid);
const buttonPanel = document.querySelector('#buttonPanel');
buttonPanel.appendChild(createButton);

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove("draw"));
}

// CREATE RESET BUTTON
createResetButton = document.createElement('button');
createResetButton.setAttribute('id', 'resetButton');
createResetButton.textContent = "Reset";
createResetButton.addEventListener('click', resetGrid);
buttonPanel.appendChild(createResetButton);

function resetGrid() {
    let gridSize = prompt("Enter Grid Size: (integer < 100)");
    if (gridSize > 100) {
        resetGrid();
        return;
    }
    gridContainer.textContent = "";
    setGrid(gridSize); 
}