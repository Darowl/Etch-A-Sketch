const grid = document.querySelector('#gridContainer')
const clearBtn = document.querySelector('#reset')
const inputGrid = document.querySelector('#range-divs')
const outputGrid = document.querySelector('.range-divs-output')
const inputColor = document.querySelector('#changeColor')
outputGrid.textContent = inputGrid.value;


const clearGrid = () => {
    const get = document.getElementsByClassName('color')
    Array.from(get).forEach(div => {
        div.classList.replace('color', 'square');
        console.log(div.className);
    });
}
clearBtn.addEventListener('click', clearGrid)

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});
 
const creteGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
}

const updateGrid = () => {
    outputGrid.textContent = inputGrid.value
    grid.innerHTML = "";
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${inputGrid.value}, 2fr)`
    );
    grid.style.setProperty(
      "grid-template-rows",
      `repeat(${inputGrid.value}, 2fr)`
    );
    for (let i = 0; i < inputGrid.value * inputGrid.value; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    }
    console.log(inputGrid.value);
  };
inputGrid.addEventListener('change', updateGrid)

creteGrid()