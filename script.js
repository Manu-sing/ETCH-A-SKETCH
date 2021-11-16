const container = document.querySelector("#container");


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let square = document.createElement("div");
        container.appendChild(square).className = "div-item";
    };

    const newDivs = document.querySelectorAll('.div-item');

    newDivs.forEach((div) => {
    
    div.addEventListener('mouseover', () => {
        div.classList.add('hovercolor')
    })
})

};

makeGrid (16, 16);










