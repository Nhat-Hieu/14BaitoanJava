// Hàm tính giai thừa
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Hàm hiển thị kết quả
function displayResult(message) {
  document.getElementById("result").innerHTML += `${message}<br>`;
}

// Bài toán 1: Tính e^x
function calculateExponential() {
  let xValue = parseFloat(document.getElementById("inputX1").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = 1;
  let termCoefficient = 1;

  for (let i = 1; i <= 5; i++) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(i);
    termCoefficient *= 1;
  }

  displayResult(`Bài 1: e^${xValue} = ${result.toFixed(6)}`);
}

// Bài toán 2: Tính 1/(1+x)^3
function calculateExpression() {
  let xValue = parseFloat(document.getElementById("inputX2").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = 1 / Math.pow(1 + xValue, 3);
  let termCoefficient = 2;

  for (let i = 2; i <= 5; i++) {
    result += termCoefficient * Math.pow(xValue, i - 2);
    termCoefficient *= (i + 1) / 2;
  }

  displayResult(`Bài 2: 1/(1+${xValue})^3 = ${result.toFixed(6)}`);
}

// Bài toán 3: Tính ln(1-x)
function calculateLn() {
  let xValue = parseFloat(document.getElementById("inputX3").value);

  if (isNaN(xValue) || xValue >= 1 || xValue < -1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng [-1, 1).");
    return;
  }

  let result = 0;
  let termCoefficient = 1;

  for (let i = 1; i <= 5; i++) {
    result -= (termCoefficient * Math.pow(xValue, i)) / i;
    termCoefficient *= -1;
  }

  displayResult(`Bài 3: ln(1-${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 4: Tính sqrt(1+x)
function calculateSqrt() {
  let xValue = parseFloat(document.getElementById("inputX4").value);

  if (isNaN(xValue) || xValue <= -1 || xValue >= 1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng (-1, 1).");
    return;
  }

  let result = 1;
  let termCoefficient = 1;

  for (let i = 1; i <= 5; i++) {
    result += (termCoefficient * Math.pow(xValue, i)) / (2 * i);
    termCoefficient *= -1;
  }

  displayResult(`Bài 4: sqrt(1+${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 5: Tính 1/sqrt(1+x)
function calculateInverseSqrt() {
  let xValue = parseFloat(document.getElementById("inputX5").value);

  if (isNaN(xValue) || xValue <= -1 || xValue >= 1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng (-1, 1).");
    return;
  }

  let result = 1;
  let termCoefficient = -0.5;

  for (let i = 1; i <= 5; i++) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(2 * i);
    termCoefficient *= (2 * i - 1) / (2 * i);
  }

  displayResult(`Bài 5: 1/sqrt(1+${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 6: Tính sin(x)
function calculateSin() {
  let xValue = parseFloat(document.getElementById("inputX6").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = xValue;
  let termCoefficient = -1;

  for (let i = 3; i <= 7; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(i);
    termCoefficient *= -1;
  }

  displayResult(`Bài 6: sin(${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 7: Tính cos(x)
function calculateCos() {
  let xValue = parseFloat(document.getElementById("inputX7").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = 1;
  let termCoefficient = -0.5;

  for (let i = 2; i <= 6; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(i);
    termCoefficient *= -1;
  }

  displayResult(`Bài 7: cos(${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 8: Tính arcsin(x)
function calculateArcsin() {
  let xValue = parseFloat(document.getElementById("inputX8").value);

  if (isNaN(xValue) || xValue <= -1 || xValue >= 1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng (-1, 1).");
    return;
  }

  let result = xValue;
  let termCoefficient = 1;

  for (let i = 3; i <= 7; i += 2) {
    result +=
      (termCoefficient *
        (factorial(i - 1) / factorial(i)) *
        Math.pow(xValue, i)) /
      i;
    termCoefficient *= (i - 2) / (i + 1);
  }

  displayResult(`Bài 8: arcsin(${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 9: Tính sin(x)/x
function calculateSinOverX() {
  let xValue = parseFloat(document.getElementById("inputX9").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = 1;
  let termCoefficient = -1 / 6;

  for (let i = 2; i <= 6; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(i);
    termCoefficient *= -1;
  }

  displayResult(`Bài 9: sin(${xValue})/x = ${result.toFixed(6)}`);
}

// Bài toán 10: Tính arctan(x)
function calculateArctan() {
  let xValue = parseFloat(document.getElementById("inputX10").value);

  if (isNaN(xValue) || xValue <= -1 || xValue >= 1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng (-1, 1).");
    return;
  }

  let result = xValue;
  let termCoefficient = -1;

  for (let i = 3; i <= 7; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / i;
    termCoefficient *= -1;
  }

  displayResult(`Bài 10: arctan(${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 11: Tính ln(1 + x)
function calculateLn1PlusX() {
  let xValue = parseFloat(document.getElementById("inputX11").value);

  if (isNaN(xValue) || xValue <= -1 || xValue > 1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng (-1, 1].");
    return;
  }

  let result = xValue;
  let termCoefficient = -1;

  for (let i = 2; i <= 7; i++) {
    result += (termCoefficient * Math.pow(xValue, i)) / i;
    termCoefficient *= -1;
  }

  displayResult(`Bài 11: ln(1 + ${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 12: Tính ln(1+x/1-x)
function calculateLnExpression() {
  let xValue = parseFloat(document.getElementById("inputX12").value);

  if (isNaN(xValue) || xValue <= -1 || xValue >= 1) {
    alert("Vui lòng nhập giá trị hợp lệ cho x trong khoảng (-1, 1).");
    return;
  }

  let result = 2 * xValue;
  let termCoefficient = 1;

  for (let i = 3; i <= 7; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / i;
    termCoefficient *= -1;
  }

  displayResult(`Bài 12: ln(1+${xValue}/1-${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 13: Tính sinh(x)
function calculateSinh() {
  let xValue = parseFloat(document.getElementById("inputX13").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = xValue;
  let termCoefficient = 1;

  for (let i = 3; i <= 7; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(i);
    termCoefficient *= 1;
  }

  displayResult(`Bài 13: sinh(${xValue}) = ${result.toFixed(6)}`);
}

// Bài toán 14: Tính cosh(x)
function calculateCosh() {
  let xValue = parseFloat(document.getElementById("inputX14").value);

  if (isNaN(xValue)) {
    alert("Vui lòng nhập giá trị hợp lệ cho x.");
    return;
  }

  let result = 1;
  let termCoefficient = 1;

  for (let i = 2; i <= 6; i += 2) {
    result += (termCoefficient * Math.pow(xValue, i)) / factorial(i);
    termCoefficient *= 1;
  }

  displayResult(`Bài 14: cosh(${xValue}) = ${result.toFixed(6)}`);
}
