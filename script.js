const container = document.querySelector(".container");

let divsCount = 256;
let squareDiv;




for (let i = 0; i < divsCount; i++) {
    squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'squareitem');
    container.appendChild(squareDiv);

}

/*const newDivs = document.querySelectorAll('.squareitem');

newDivs.forEach((div) => {
    
    div.addEventListener('mouseover', () => {
        div.classList.add('hovercolor')
    })
})*/








