function calculate() {
    const weight = document.getElementById("weight").value;
    const heightcm = document.getElementById("heightcm").value;
    // const error = window.alert("please enter some info");

    //weight is proper metrics kg 
    //height needs to be converted to m from cm by dividing by 100
    const heightm = heightcm / 100;
    const heightbmi = heightm ** 2;
    // bmi is equals to weight kg/ [height m]squared
    const bmidraft = weight / heightbmi;
    // round bmi cal to the nearest 2 decimals 
    const bmi = bmidraft.toFixed(2);

    //switch
    //BMI Score	Meaning
    // Less than 18.5	Underweight
    // 18.5 – 24.9	Normal weight
    // 25.0 – 29.9	Overweight
    // 30.0 – 34.9	Obesity (Class 1)
    // 35.0 – 39.9	Obesity (Class 2)
    // 40.0 and above	Severe Obesity (Class 3)
    let message = "" //dynamic message 
    switch (true) {
        case bmi < 18.5:
            message = "Underweight"
            break;
        case bmi >= 18.5 && bmi <= 24.9:
            message = "Normal Weight"
            break;
        case bmi >= 25 && bmi <= 29.9:
            message = "Overweight"
            break;
    }
    //display the result
    document.getElementById("results").innerHTML = `Your BMI is ${bmi} and you are ${message}`
}