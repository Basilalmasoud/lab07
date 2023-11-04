window.addEventListener('DOMContentLoaded', (event) => {
    const colorForm = document.getElementById('colorForm');
    const colorInput = document.getElementById('colorInput');
    const header = document.getElementById('header');

    colorForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const colorValue = colorInput.value;
        header.style.color = colorValue;
        colorInput.value = ''; 
    });
});