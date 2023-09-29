let previousValue = "";
let currentValue = "";
let operator = "";

let numberScreen = document.querySelector(".screen");
let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

let numberBtns = document.querySelectorAll(".number");
let decimalBtn = document.querySelector(".decimal");

let clearBtn = document.querySelector(".clearBtn");
let deleteBtn = document.querySelector(".deleteBtn");

let operationBtns = document.querySelectorAll(".operand");
let equalBtn = document.querySelector(".equals");

numberBtns.forEach((number) =>
  number.addEventListener("click", function (e) {
    displayNumberOnScreen(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

function displayNumberOnScreen(number) {
  if (currentValue.length <= 5) {
    currentValue += number;
  }
}

operationBtns.forEach((operation) =>
  operation.addEventListener("click", function (e) {
    handleOperation(e.target.textContent);
    previousScreen.textContent = previousValue + operator;
    currentScreen.textContent = currentValue;
  })
);

equalBtn.addEventListener("click", function () {
  calculate();
  previousScreen.textContent = "";
  currentScreen.textContent = previousValue;
});

function handleOperation(operation) {
  operator = operation;
  previousValue = currentValue;
  currentValue = "";
}

// function clearScreen
clearBtn.addEventListener("click", function () {
  previousValue = "";
  currentValue = "";
  operator = "";

  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}
