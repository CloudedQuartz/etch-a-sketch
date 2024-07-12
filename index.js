function generateGrid(gridSize) {
    gridSquareSize = 960 / gridSize
    gridElem = document.createElement('div')
    gridElem.className = "grid-element";
    gridElem.style.height = gridSquareSize + 'px'
    gridElem.style.width = gridSquareSize + 'px'
    container = document.getElementById("grid-container")

    for (let i = 0; i < 960; i += gridSquareSize) {
        for (let j = 0; j < 960; j += gridSquareSize) {
            container.appendChild(gridElem.cloneNode());
        }
    }
}

generateGrid(16)