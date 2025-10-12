const squares = {
    h1: document.getElementById("hour-1"),
    h2: document.getElementById("hour-2"),
    m1: document.getElementById("minute-1"),
    m2: document.getElementById("minute-2"),
    ampm: document.getElementById("AMPM")
};

// Store previous time for comparison
let prev = { hour: "", minute: "", ampm: "" };

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();

    // AM/PM handling
    const amPmText = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    // Prepare strings
    const hourStr = hours.toString().padStart(2, "0");
    const minuteStr = minutes.toString().padStart(2, "0");

    // Update only if values changed (real flip)
    if (hourStr !== prev.hour) {
        flipDigit(squares.h1, hourStr[0]);
        flipDigit(squares.h2, hourStr[1]);
        prev.hour = hourStr;
    }
    if (minuteStr !== prev.minute) {
        flipDigit(squares.m1, minuteStr[0]);
        flipDigit(squares.m2, minuteStr[1]);
        prev.minute = minuteStr;
    }
    if (amPmText !== prev.ampm) {
        squares.ampm.textContent = amPmText;
        prev.ampm = amPmText;
    }
}

function flipDigit(element, newVal) {
    const oldVal = element.textContent;
    if (oldVal === newVal) return;

    // Create top and bottom flip layers
    const span = document.createElement("span");
    span.textContent = newVal;
    element.innerHTML = ""; // clear old
    element.appendChild(span);

    element.classList.add("flip");
    setTimeout(() => {
        element.classList.remove("flip");
    }, 500);
}

// Initialize & update every second
updateClock();
setInterval(updateClock, 1000);
