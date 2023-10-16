function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(size) {
    const container = document.getElementById("grid-container");
    container.innerHTML = ""; // clears current grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = getRandomColor();
        });
        container.appendChild(gridItem);
    }
}

createGrid(16);

document.getElementById("reset-button").addEventListener("click", function() {
    let newSize;
    while (true) {
        newSize = prompt("Enter the number of squares per side for the new grid (up to 100):");
        if (newSize === null) {
            break;
        }
        newSize = parseInt(newSize, 10);
        if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
            // Valid input, create the grid and exit the loop
            createGrid(newSize);
            break;
        } else {
            // Invalid input, show a popup and prompt again
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    }
});