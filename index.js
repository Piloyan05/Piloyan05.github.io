function validateNonNegative(input) {
  if (input.value < 0) {
    input.value = ""; // Clear the input if it's negative
  }
}

function resetSection(resultId) {
  document.getElementById(resultId).textContent = "0";
}
function resetSectionAll(result10,result20,result30,result40) {
  document.getElementById(result10).textContent = "0 kWh";
  document.getElementById(result20).textContent = "0 kWh";
  document.getElementById(result30).textContent = "0 kWh";
  document.getElementById(result40).textContent = "0 kWh";
}
function resetFinalResults() {
  document.getElementById('dividedBy52').textContent = "0 Կվ";
  document.getElementById('dividedBy1500').textContent = "0 Կվ";
  document.getElementById('finalResult').textContent = "0 Կվ";
}


function addAndRound() {
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result1').textContent = "Please enter valid numbers.";
    return;
  }

  const sum = num1 + num2;
  const roundedSum = Math.ceil(sum / 5000) * 5000;
  document.getElementById('result1').textContent = roundedSum;

  const result1 = parseFloat(document.getElementById('result1').textContent);
  let finalValue = result1
  const dividedBy52 = Math.ceil(finalValue / 52);
const roundedDividedBy52 = Math.ceil(dividedBy52 / 1000) * 1000;

// Divide by 1500 and round up to the nearest 1
const dividedBy1500 = Math.ceil(roundedDividedBy52 / 1500);

// Update intermediate results
document.getElementById('dividedBy52').textContent = roundedDividedBy52 + " ԿՎ";
document.getElementById('dividedBy1500').textContent = dividedBy1500 + " ԿՎ";
// Set final result 
document.getElementById('finalResult').textContent = dividedBy1500 + " ԿՎ";
}



function multiplyAddDivide() {
  const num3 = parseFloat(document.getElementById('input3').value);
  const num4 = parseFloat(document.getElementById('input4').value);

  if (isNaN(num3) || isNaN(num4)) {
    document.getElementById('result2').textContent = "Please enter valid numbers.";
    return;
  }

  const result = ((num3 * 12) + (num4 * 12)) / 2;
  const roundedResult = Math.ceil(result / 5000) * 5000;
  document.getElementById('result2').textContent = roundedResult;


  const result2 = parseFloat(document.getElementById('result2').textContent);
  let finalValue = result2;
  const dividedBy52 = Math.ceil(finalValue / 52);
const roundedDividedBy52 = Math.ceil(dividedBy52 / 1000) * 1000;

// Divide by 1500 and round up to the nearest 1
const dividedBy1500 = Math.ceil(roundedDividedBy52 / 1500);

// Update intermediate results
document.getElementById('dividedBy52').textContent = roundedDividedBy52 + " ԿՎ";
document.getElementById('dividedBy1500').textContent = dividedBy1500 + " ԿՎ";
// Set final result
document.getElementById('finalResult').textContent = dividedBy1500 + " ԿՎ";

}

function calculateSumOfTwelve() {
  let sum = 0;

  for (let i = 5; i <= 16; i++) {
    const input = parseFloat(document.getElementById(`input${i}`).value);
    if (!isNaN(input)) {
      sum += input;
    }
  }

  const roundedSum = Math.ceil(sum / 5000) * 5000;
  document.getElementById('result3').textContent = roundedSum;


  const result3 = parseFloat(document.getElementById('result3').textContent);
  let finalValue = result3;
  const dividedBy52 = Math.ceil(finalValue / 52);
const roundedDividedBy52 = Math.ceil(dividedBy52 / 1000) * 1000;

// Divide by 1500 and round up to the nearest 1
const dividedBy1500 = Math.ceil(roundedDividedBy52 / 1500);

// Update intermediate results
document.getElementById('dividedBy52').textContent = roundedDividedBy52 + " ԿՎ";
document.getElementById('dividedBy1500').textContent = dividedBy1500 + " ԿՎ";
// Set final result
document.getElementById('finalResult').textContent = dividedBy1500 + " ԿՎ";

}

function displayResult() {
  const inputResult = parseFloat(document.getElementById('inputResult').value);

  if (isNaN(inputResult)) {
    document.getElementById('result4').textContent = "Please enter a valid number.";
    return;
  }

  document.getElementById('result4').textContent = inputResult;

  const result4 = parseFloat(document.getElementById('result4').textContent);
  let finalValue = result4;
  const dividedBy52 = Math.ceil(finalValue / 52);
  const roundedDividedBy52 = Math.ceil(dividedBy52 / 1000) * 1000;

// Divide by 1500 and round up to the nearest 1
const dividedBy1500 = Math.ceil(roundedDividedBy52 / 1500);

document.getElementById('dividedBy52').textContent = roundedDividedBy52 + " ԿՎ";
document.getElementById('dividedBy1500').textContent = dividedBy1500 + " ԿՎ";
// Set final result
document.getElementById('finalResult').textContent = dividedBy1500 + " ԿՎ";



}






function finalCalculation() {
const result1 = parseFloat(document.getElementById('result1').textContent);
const result2 = parseFloat(document.getElementById('result2').textContent);
const result3 = parseFloat(document.getElementById('result3').textContent);
const result4 = parseFloat(document.getElementById('result4').textContent);

let finalValue = result1 || result2 || result3 || result4 || 0;

// Divide by 52 and round up to the nearest 1000
const dividedBy52 = Math.ceil(finalValue / 52);
const roundedDividedBy52 = Math.ceil(dividedBy52 / 1000) * 1000;

// Divide by 1500 and round up to the nearest 1
const dividedBy1500 = Math.ceil(roundedDividedBy52 / 1500);

// Update intermediate results
document.getElementById('dividedBy52').textContent = roundedDividedBy52;
document.getElementById('dividedBy1500').textContent = dividedBy1500;

// Set final result
document.getElementById('finalResult').textContent = dividedBy1500;
}




function calculateUsage() {
// Get input values
const powerInput = parseFloat(document.getElementById('powerInput').value);
const hoursPerDay = parseFloat(document.getElementById('hoursPerDay').value);

// Validate inputs
if (isNaN(powerInput) || isNaN(hoursPerDay) || powerInput <= 0 || hoursPerDay <= 0) {
  alert('Please enter valid positive numbers for both inputs.');
  return;
}

// Calculate annual energy usage and adjust for 1.15
const annualUsage = (powerInput * (hoursPerDay/3) * 365) / 1.15;
const weeklyUsage = (powerInput * (hoursPerDay/3) * 7) / 1.15;
const monthlyUsage = (powerInput * (hoursPerDay/3) * 30) / 1.15;
const dailyUsage = (powerInput * (hoursPerDay/3)) / 1.15;

// Display the result
document.getElementById('span1').textContent = `${dailyUsage.toFixed(2)} Կվ/ժ`;
document.getElementById('span2').textContent = `${weeklyUsage.toFixed(2)} Կվ/ժ`;
document.getElementById('span3').textContent = `${monthlyUsage.toFixed(2)} Կվ/ժ`;
document.getElementById('span4').textContent = `${annualUsage.toFixed(2)} Կվ/ժ`;


}
function validateHours(input) {
if (input.value > 24) {
  input.value = 24; 
}
}
function validateKW(input) {
  if (input.value > 30) {
    input.value = 30; 
  }
  }