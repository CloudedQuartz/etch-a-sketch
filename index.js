function darkenElement(e) {
    console.log(e.target.style.opacity)
    e.target.style.opacity = String(Number(getComputedStyle(e.target).opacity) - 0.2)
}

function generateGrid(gridSize) {
    gridSquareSize = 960 / gridSize
    gridElem = document.createElement('div')
    gridElem.className = "grid-element";
    gridElem.style.height = gridSquareSize + 'px'
    gridElem.style.width = gridSquareSize + 'px'
    container = document.getElementById("grid-container")
    container.innerHTML = ''

    for (let i = 0; i < 960; i += gridSquareSize) {
        for (let j = 0; j < 960; j += gridSquareSize) {
            let toAppendElem = gridElem.cloneNode()
            toAppendElem.onmouseover = (e) => darkenElement(e)
            container.appendChild(toAppendElem);
        }
    }
}

function generateGridFromInput() {
    inputElem = document.getElementById("grid-size-input")
    console.lig
    generateGrid(Number(inputElem.value))
}

function resizeGridListener() {
    resizeButton = document.getElementById('grid-resize')
    resizeButton.onclick = generateGridFromInput
}

resizeGridListener()
generateGridFromInput()
