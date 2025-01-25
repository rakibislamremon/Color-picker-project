const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

// Update color display when a new color is picked
colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    colorDisplay.style.backgroundColor = selectedColor;
});
