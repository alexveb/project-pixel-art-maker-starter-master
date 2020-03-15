// Select color input
// Select size input const
let color = "";
// When size is submitted by the user, call makeGrid()
let sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    let heightElement = document.getElementById("inputHeight");
    let widthElement = document.getElementById("inputWidth");
    const height = heightElement.value;
    const width = widthElement.value;
    makeGrid(height, width);
})
function makeGrid(h, w) {
    
// Your code goes here!

// Deletes previous table if any

    let x = 1;
    let t = "table" + x;
    let row = document.getElementById(t);
    while (row !== null) {
        row.remove();
        x = ++x;
        t = "table" + x;
        row = document.getElementById(t);
    }

// Draws canvas

    let table = document.querySelector("#pixelCanvas");
    for (let i = 1; i <= h; i++) {
        table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
        let line = document.querySelector("#table" + i);
        for (let j = 1; j <= w; j++) {
            line.insertAdjacentHTML("afterbegin","<td id = cell" + i + j +"></td>");
        }
    }

// Adds color to cell

    document.getElementById("pixelCanvas").addEventListener("click", function () {
        let colorElement = document.getElementById("colorPicker");
        let color = colorElement.value;
        let click = event.target.id;
        let elem = document.getElementById(click);
        let attrib = elem.hasAttribute("style");
        if (attrib === true) {
            elem.removeAttribute("style");
        } else {
            elem.style.backgroundColor = color;
        }
    })
}
