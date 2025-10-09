// Selected Body and stored it in the Variable
const bodyColor = document.querySelector('body');

// Now we have to select the 4 buttons with the class '.button'
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        
        // Use e.target.dataset to access the custom 'data-' attributes.
        // The property name is 'color' because the attribute is 'data-color'.
        const selectedColor = e.target.dataset.color;
        
        // Set the body background color to the hex value stored in data-color.
        bodyColor.style.backgroundColor = selectedColor;

        // No need for a switch statement, making the code much cleaner and scalable.
    });
});