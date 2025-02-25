// Get DOM elements
const inputField = document.getElementById("temperatureInput");
const conversionType = document.getElementById("conversionType");
const convertBtn = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

// Function to validate input and convert temperature
function convertTemperature() {
    let temperature = inputField.value;

    // Check if input is empty or not a number
    if (temperature === "" || isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        resultElement.style.color = "red";
        inputField.style.border = "2px solid red"; // Highlight input field in red
        return;
    }

    // Convert input to a number
    temperature = parseFloat(temperature);

    // Reset styles if input is valid
    inputField.style.border = "2px solid #ccc";
    
    let result;
    if (conversionType.value === "CtoF") {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature} °C is ${result.toFixed(2)} °F`;
    } else {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature} °F is ${result.toFixed(2)} °C`;
    }

    // Reset error color and add animation effect
    resultElement.style.color = "black";
    resultElement.style.opacity = "0";
    setTimeout(() => resultElement.style.opacity = "1", 200); // Smooth transition effect
}

// Listen for button click
convertBtn.addEventListener("click", convertTemperature);

// Listen for "Enter" key press
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});
