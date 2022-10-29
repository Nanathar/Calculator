class Calculator {
  constructor(previous, current) {
    this.previous = previous
    this.current = current
    this.clear()
  }
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {

  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {
    this.current.innerText = this.currentOperand
  }

}

const numberDiv = document.querySelectorAll('.number');
const operationDiv = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clear-all');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const result = document.querySelector('.result');
const current = document.querySelector('.current-operand');
const previous = document.querySelector('.previous-operand');


const calculator = new Calculator(previous, current);

numberDiv.forEach(div => {
  div.addEventListener('click', () => {
    calculator.appendNumber(div.innerText);
    calculator.updateDisplay();
  })
})





























// Przyciski zmian koloru i stop Animacji
const divResult = document.querySelector('div.result')

divResult.addEventListener('click', (div) => {
  if (div.target.classList.contains('stop-start-animation')) {
    document.querySelector('div.animation').classList.toggle('stop')
  } else if (div.target.classList.contains('color')) {
    document.body.classList.toggle('active');
  }
})