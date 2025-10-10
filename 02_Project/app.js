// Select the form by ID
const formId = document.querySelector('#form-id');

// Add an event listener for form submission
formId.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents form from refreshing the page

    // ✅ Fix 1: Select input elements properly and get their values
    // Previously you selected the <div> instead of the <input>
    const heightInput = document.querySelector('#Height input').value;
    const weightInput = document.querySelector('#Weight input').value;

    // ✅ Fix 2: Convert string input values to integers
    const height = parseInt(heightInput);
    const weight = parseInt(weightInput);

    // ✅ Fix 3: Correct way to get element (no # inside getElementById)
    const displayMessage = document.getElementById('displayMessage');

    // Clear previous output
    displayMessage.innerText = "";

    // ✅ Fix 4: Input validation checks
    if (isNaN(height) || height === "" || height <= 0) {
        displayMessage.innerText = "Please enter a valid height.";
        return;
    }

    if (isNaN(weight) || weight === "" || weight <= 0) {
        displayMessage.innerText = "Please enter a valid weight.";
        return;
    }

    // ✅ Fix 5: BMI formula correction
    // BMI = weight (kg) / (height in meters)^2
    // height was in cm, so convert it to meters first
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // ✅ Fix 6: Use correct comparison ranges for BMI categories
    if (bmi < 18.5) {
        displayMessage.innerText = `Your BMI is ${bmi} — You are Underweight.`;
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        displayMessage.innerText = `Your BMI is ${bmi} — You are Normal.`;
    } 
    else if (bmi >= 25 && bmi <= 39.9) {
        displayMessage.innerText = `Your BMI is ${bmi} — You are Overweight.`;
    } 
    else if (bmi >= 40) {
        displayMessage.innerText = `Your BMI is ${bmi} — You are Obese.`;
    } 
    else {
        displayMessage.innerText = `Unexpected input. Please check your entries.`;
    }

    // ✅ Optional: log in console for debugging
    console.log(`Height: ${height}, Weight: ${weight}, BMI: ${bmi}`);
});
