const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 16; i++) {
    const createDiv = document.createElement('div');
    createDiv.setAttribute('id', `gridRow-${i+1}`);
    createDiv.setAttribute('class', 'gridRow');
    gridContainer.appendChild(createDiv);

    for (let j = 0; j < 16; j++) {
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', `square-${i+1}-${j+1}`);
        createDiv.setAttribute('class', 'square');
        const gridRow = document.querySelector(`#gridRow-${i+1}`);
        gridRow.appendChild(createDiv);
    }
}
