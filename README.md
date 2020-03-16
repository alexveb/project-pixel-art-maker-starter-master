# Pixel Art Maker Project

Pixel Art Maker will run  when you will open index.html

## Instructions

You'll be given starter code, including HTML and CSS, to build the application. You'll write JavaScript code that lets the user create a grid of squares representing their design, and apply colors to those squares to create a digital masterpiece!

Your users should be able to:

   1. Dynamically set the size of the table as an _N_ by _M_ grid.
   2. Choose a color.
   3. Click a cell in the grid to fill that cell with the chosen color.
           
           
Your primary task is to implement the makeGrid() function, that dynamically creates a grid that the user can interact with.

In this project, you'll use your front-end programming skills including:

   - Defining variables with const and let
   - Accessing the DOM using methods of the document object
   - Declaring functions and attaching them to DOM objects as event listeners
   - Writing nested loops and using loop variables

## Development Strategy
Before writing any code, try loading up index.html from the starter project to see how things look! Notice that the design.js file is implemented in the <body> tag in the index.html file. Your goal is to build out the design.js file to achieve all the interactive elements on the page!

Now, open up design.js. As you start writing your code, keep these three tasks in mind:

Define your variables by selecting the DOM elements that the user will interact with. This is where your JavaScript variables can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
Set the size of the cross stitch canvas as an _N_ by _M_ grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.

