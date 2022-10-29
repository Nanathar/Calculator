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
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    if (number === '.' && this.currentOperand === '') return this.currentOperand = '0.'
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const curr = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(curr)) return
    switch (this.operation) {
      case '+':
        computation = prev + curr
        break
      case '-':
        computation = prev - curr
        break
      case '*':
        computation = prev * curr
        break
      case '÷':
        computation = prev / curr
        break
        // case '%':
        //   computation = curr / 100
        //   break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''

    // case '+':
    //   computation = prev + current
    //   break
  }

  getDisplayNumber(number) {

  }

  updateDisplay() {
    this.current.innerText = this.currentOperand
    this.previous.innerText = this.previousOperand
  }

}

const numberDiv = document.querySelectorAll('.number');
const operationDiv = document.querySelectorAll('.operation');
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

operationDiv.forEach(div => {
  div.addEventListener('click', () => {
    calculator.chooseOperation(div.innerText);
    calculator.updateDisplay();
  })
})

equals.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

clearAll.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

clear.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
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