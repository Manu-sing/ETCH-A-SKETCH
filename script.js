let container = document.querySelector("#container");
const bod = document.querySelector('body');


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

makeGrid (50, 50);


const button = document.querySelector('button');

button.addEventListener('click', promptMe);


function promptMe(){
    container.remove();
    let msg = prompt("How many squares per side would you like in your sketchpad?");
    let userInput = msg;
    makeNewGrid(userInput, userInput);

    
}



function makeNewGrid(userInput, userInput) {

    container = document.createElement('div');
    container.setAttribute('id', 'container');
    bod.appendChild(container);


    
    
    container.style.setProperty('--grid-rows', userInput);
    container.style.setProperty('--grid-cols', userInput);
    for (i = 0; i < (userInput * userInput); i++) {
        if(userInput > 100) {
            container.remove()
            alert('You can only choose a maximum of 100 squares per side. Create again :)');
            return;
        }
        let square = document.createElement("div");
        container.appendChild(square).className = "div-item";
    };

    const newDivs = document.querySelectorAll('.div-item');

    newDivs.forEach((div) => {
    
    div.addEventListener('mouseover', () => {
        div.classList.add('hovercolor')
    })
})


}



















