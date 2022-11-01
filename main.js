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
    if (this.currentOperand === '') this.currentOperand = '0'
  }

  appendNumber(number) {
    if (this.currentOperand.length > 12) return
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (number === '.' && this.currentOperand === '') return this.currentOperand = '0.'
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.previousOperand !== '' && this.currentOperand === '') this.operation = operation
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      if (this.currentOperand.toString() === '0' && this.operation.toString() === '÷') {
        this.clear()
        return
      }
      this.compute()
      this.operation = operation
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
        if (curr === 0) {
          this.clear()
          return
        }
        computation = prev / curr
        break
      case '%':
        computation = prev / 100 * curr
        break
      default:
        return
    }
    
    this.currentOperand = computation.toPrecision(12)
    if (this.currentOperand.length >= 0) {
      while (this.currentOperand.slice(-1) === '0') {
        this.currentOperand = this.currentOperand.slice(0, -1)
      }
      if (this.currentOperand.slice(-1) === '.') {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
      }
    }

    this.operation = undefined
    this.previousOperand = ''

  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.current.innerText = this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previous.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previous.innerText = ''
    }
  }
}

const numberDiv = document.querySelectorAll('.number');
const operationDiv = document.querySelectorAll('.operation');
const clearAll = document.querySelector('.clear-all');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
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
const result = document.querySelector('.result');

result.addEventListener('click', (div) => {
  if (div.target.classList.contains('stop-start-animation')) {
    document.querySelector('div.animation').classList.toggle('stop')
  } else if (div.target.classList.contains('color')) {
    document.body.classList.toggle('active');
  }
})

// Animacja przycisku
const btn = document.querySelector('.buttons');

btn.addEventListener('click', (div) => {
  div.target.classList.add('active')
  const clickBtn = () => {
    document.querySelectorAll('.click').forEach(div => {
      div.classList.remove('active');
    })
  }
  setTimeout(clickBtn, 200)
})

// przyciski na klawiaturze
window.addEventListener("keydown", (e) => {
  if (e.code === 'Numpad0') {
    const zero = document.querySelector('#zero')
    calculator.appendNumber(zero.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad1') {
    const one = document.querySelector('#one')
    calculator.appendNumber(one.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad2') {
    const two = document.querySelector('#two')
    calculator.appendNumber(two.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad3') {
    const three = document.querySelector('#three')
    calculator.appendNumber(three.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad4') {
    const four = document.querySelector('#four')
    calculator.appendNumber(four.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad5') {
    const five = document.querySelector('#five')
    calculator.appendNumber(five.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad6') {
    const six = document.querySelector('#six')
    calculator.appendNumber(six.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad7') {
    const seven = document.querySelector('#seven')
    calculator.appendNumber(seven.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad8') {
    const eight = document.querySelector('#eight')
    calculator.appendNumber(eight.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'Numpad9') {
    const nine = document.querySelector('#nine')
    calculator.appendNumber(nine.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'NumpadDecimal' || e.code === 'period') {
    const dot = document.querySelector('#dot')
    calculator.appendNumber(dot.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'NumpadDivide') {
    const divisibility = document.querySelector('#divisibility')
    calculator.chooseOperation(divisibility.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'NumpadMultiply') {
    const multiplication = document.querySelector('#multiplication')
    calculator.chooseOperation(multiplication.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'NumpadSubtract') {
    const minus = document.querySelector('#minus')
    calculator.chooseOperation(minus.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'NumpadAdd') {
    const plus = document.querySelector('#plus')
    calculator.chooseOperation(plus.innerText);
    calculator.updateDisplay();
  }
  if (e.code === 'NumpadEnter' || e.code === 'Enter') {
    calculator.compute()
    calculator.updateDisplay()
  }
  if (e.code === 'Backspace') {
    calculator.delete()
    calculator.updateDisplay()
  }
});