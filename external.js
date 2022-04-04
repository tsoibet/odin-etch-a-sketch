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
            // ADD EVENT LISTENER TO EACH SQUARE CREATED
            createDiv.addEventListener('mousemove', drawPixel);
            const gridRow = document.querySelector(`#gridRow-${i+1}`);
            gridRow.appendChild(createDiv);
        }
    }
}

function drawPixel() {
    this.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

// CREATE CLEAR BUTTON
const clearButton = document.createElement('button');
clearButton.setAttribute('id', 'clearButton');
clearButton.textContent = "Clear";
clearButton.addEventListener('click', clearGrid);
const buttonPanel = document.querySelector('#buttonPanel');
buttonPanel.appendChild(clearButton);

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.background = "white");
}

// CREATE RESET BUTTON
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'resetButton');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetGrid);
buttonPanel.appendChild(resetButton);

function resetGrid() {
    let gridSize = prompt("Enter Grid Size: (integer < 100)");
    if (gridSize > 100) {
        resetGrid();
        return;
    }
    gridContainer.textContent = "";
    setGrid(gridSize); 
}