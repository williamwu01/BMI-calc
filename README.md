# BMI Calculator 🧮

A simple web-based BMI (Body Mass Index) calculator that calculates your BMI based on your weight and height inputs. The tool provides your BMI score along with an interpretation of your health category.

---

## 🌟 Features

- **Easy-to-use**: Enter your weight (in kg) and height (in cm), and get instant results.
- **Dynamic Feedback**: Provides a clear message about your BMI category (e.g., Underweight, Normal Weight, Overweight).
- **Lightweight**: No external dependencies—just pure JavaScript!

---

## 🚀 How It Works

1. **Input Fields**:
   - Enter your weight in kilograms (`kg`).
   - Enter your height in centimeters (`cm`).

2. **Calculation**:
   - The app converts height from centimeters to meters.
   - BMI is calculated using the formula:
     ```
     BMI = Weight (kg) / (Height (m)²)
     ```

3. **Result**:
   - Your BMI score is rounded to two decimal places.
   - A dynamic message interprets your BMI category:
     - `< 18.5`: Underweight
     - `18.5 – 24.9`: Normal Weight
     - `25.0 – 29.9`: Overweight
     - `30.0+`: Obesity (Class 1 or higher)

---

## 🛠️ Code Example

Here’s how the core calculation works:

```javascript
function calculate() {
    const weight = document.getElementById("weight").value;
    const heightcm = document.getElementById("heightcm").value;

    // Convert height to meters
    const heightm = heightcm / 100;
    const heightbmi = heightm ** 2;

    // Calculate BMI
    const bmidraft = weight / heightbmi;
    const bmi = bmidraft.toFixed(2);

    // Interpret BMI category
    let message = "";
    switch (true) {
        case bmi < 18.5:
            message = "Underweight";
            break;
        case bmi >= 18.5 && bmi <= 24.9:
            message = "Normal Weight";
            break;
        case bmi >= 25 && bmi <= 29.9:
            message = "Overweight";
            break;
        default:
            message = "Obesity";
    }

    // Display result
    document.getElementById("results").innerHTML = `Your BMI is ${bmi} and you are ${message}`;
}
