// Global variables  for size , color , table 
const $sizePicker  = document.querySelector('#sizePicker'); 
const $colorPicker = document.querySelector('#colorPicker');  
const $table = document.querySelector('#pixelCanvas');

	
// When size is submitted by the user, call makeGrid()
	sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    let heightElement = document.getElementById("inputHeight"); 
    let widthElement = document.getElementById("inputWidth"); 
    const height = heightElement.value;
    const width = widthElement.value;
    makeGrid(height, width);
	})

// Draw Canvas
  function makeGrid(w, h) {
    $table.innerHTML = '';

    for (let row = 0; row < w; row++) {   // for loop for width to draw canvas
      let newRow = $table.insertRow();

      for (let cell = 0; cell < h; cell++) {  // for loop for height to draw canvas
        // add new cell with listener to change color
        let newCell = newRow.insertCell();

        newCell.onclick = changeColor;  // change color on cell with a click
        newCell.ondblclick = cleanColor; // clean the color from the cell with double click
      }
    }
  }

  //  Function so can  change the color of the clicked cell to current color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

  // Function so can clear the cell with a double click
  function cleanColor() {
    this.style.background = '#fff';
  }
