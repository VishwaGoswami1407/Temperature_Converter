function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        if (unit === 'celsius') {
            result = `Fahrenheit: ${(temperature * 9/5) + 32}°F, Kelvin: ${temperature + 273.15}K`;
        } else if (unit === 'fahrenheit') {
            result = `Celsius: ${(temperature - 32) * 5/9}°C, Kelvin: ${(temperature - 32) * 5/9 + 273.15}K`;
        } else {
            result = `Celsius: ${temperature - 273.15}°C, Fahrenheit: ${(temperature - 273.15) * 9/5 + 32}°F`;
        }
    }

    document.getElementById('result').textContent = result;
}
