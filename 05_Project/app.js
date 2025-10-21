// --- Global Declarations ---
const HexCode = '0123456789ABCDEF'; // Corrected to 16 characters (0-F)
let Interval = null; // Variable to store the interval ID, accessible globally

// --- Functions ---

// Function to generate a random hex color code
function generateRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        // Picks a random character from the 16 available (0-F)
        color += HexCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBodyColor() {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    // Optional: Log the new color to the console for verification
    console.log("Background color changed to:", newColor); 
}

// Function to start the color changing interval
function startChangingColor() {
    // Clear any existing interval to prevent multiple intervals running simultaneously
    if (Interval !== null) {
        clearInterval(Interval);
    }
    
    // Set a new interval, calling changeBodyColor every 2000ms (2 seconds)
    Interval = setInterval(changeBodyColor, 2000);

    // Optional: Immediately change the color once upon starting
    changeBodyColor(); 
}

// Function to stop the color changing interval
function stopChangingColor() {
    clearInterval(Interval);
    Interval = null; // Good practice to reset the variable after clearing
    console.log("Color changing stopped.");
}

// --- Event Listeners ---

// Capturing Start Button (assuming it has id='Start')
const StartButton = document.getElementById('Start');

// Check if the button exists before adding listener
if (StartButton) {
    // Correct event name is 'click', and pass the function reference (not call it)
    StartButton.addEventListener('click', startChangingColor);
}

// Capturing Stop Button (assuming it has id='Stop')
const StopButton = document.getElementById('Stop');

// Check if the button exists before adding listener
if (StopButton) {
    // Correct event name is 'click', and pass the function reference
    StopButton.addEventListener('click', stopChangingColor);
}
