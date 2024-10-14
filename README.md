# Etch-A-Sketch

An interactive web-based Etch-A-Sketch application that allows users to create colorful pixel art by hovering over a grid. This project is built using HTML, CSS, and JavaScript.

## Live Demo

![etchsketch](https://github.com/user-attachments/assets/2fbff337-9280-40c7-aeae-0c28a5adda2b)

Try the Etch-A-Sketch here: [Etch-A-Sketch Demo](https://sehundpark.github.io/etch-a-sketch/)

## Features

- Dynamic grid creation with adjustable size (up to 100x100)
- Random color generation for each grid cell on hover
- Responsive design that adjusts to different screen sizes
- Reset button to clear the grid and create a new one with custom size

## How to Use

1. When you open the application, you'll see a 16x16 grid by default.
2. Hover your mouse over the grid cells to start drawing. Each cell will change to a random color when you hover over it.
3. To reset the grid and choose a new size:
   - Click the "Reset" button at the top of the page.
   - Enter a number between 1 and 100 when prompted for the new grid size.
   - A new grid will be created with your specified dimensions.

## Project Structure

- `index.html`: The main HTML structure of the application.
- `styles.css`: CSS file for styling the interface and grid.
- `script.js`: JavaScript file containing the logic for grid creation, color generation, and user interactions.

## Technical Implementation

The main components of the JavaScript code include:

- `getRandomColor()`: Generates a random hex color code.
- `createGrid(size)`: Creates a grid of the specified size and sets up event listeners for each cell.
- Event listener for the reset button to allow users to create a new grid with a custom size.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/sehundpark/etch-a-sketch/issues) if you want to contribute.

## License

This project is open source and available under the [MIT License](LICENSE).
