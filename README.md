const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentValue = '0';
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
  display.textContent = currentValue;
}

function inputNumber(value) {
  if (shouldResetDisplay) {
    currentValue = value;
    shouldResetDisplay = false;
  } else {
    currentValue = currentValue === '0' ? value : currentValue + value;
  }

  updateDisplay();
}

function inputDecimal() {
  if (shouldResetDisplay) {
    currentValue = '0.';
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }

  if (!currentValue.includes('.')) {
    currentValue += '.';
    updateDisplay();
  }
}

function clearCalculator() {
  currentValue = '0';
  firstOperand = null;
  operator = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function deleteLastChar() {
  if (shouldResetDisplay) {
    currentValue = '0';
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }

  currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
  updateDisplay();
}

function setOperator(nextOperator) {
  const inputValue = Number(currentValue);

  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    currentValue = String(result);
    firstOperand = result;
  }

  operator = nextOperator;
  shouldResetDisplay = true;
}

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? 'Error' : a / b;
    default:
      return b;
  }
}

function evaluate() {
  if (operator === null || firstOperand === null) {
    return;
  }

  const inputValue = Number(currentValue);
  const result = calculate(firstOperand, inputValue, operator);

  currentValue = String(result);
  firstOperand = null;
  operator = null;
  shouldResetDisplay = true;
  updateDisplay();
}

function applyPercent() {
  const value = Number(currentValue) / 100;
  currentValue = String(value);
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const { action, value } = button.dataset;

    if (action === 'number') {
      inputNumber(value);
      return;
    }

    if (action === 'decimal') {
      inputDecimal();
      return;
    }

    if (action === 'clear') {
      clearCalculator();
      return;
    }

    if (action === 'delete') {
      deleteLastChar();
      return;
    }

    if (action === 'percent') {
      applyPercent();
      return;
    }

    if (action === 'operator') {
      setOperator(value);
      return;
    }

    if (action === 'equals') {
      evaluate();
    }
  });
});

document.addEventListener('keydown', (event) => {
  const { key } = event;

  if (/^[0-9]$/.test(key)) {
    inputNumber(key);
  }

  if (key === '.') {
    inputDecimal();
  }

  if (['+', '-', '*', '/'].includes(key)) {
    setOperator(key);
  }

  if (key === 'Enter' || key === '=') {
    evaluate();
  }

  if (key === 'Backspace') {
    deleteLastChar();
  }

  if (key === 'Escape') {
    clearCalculator();
  }

  if (key === '%') {
    applyPercent();
  }
});

updateDisplay();

