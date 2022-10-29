// Przyciski zmian koloru i stop Animacji
const divResult = document.querySelector('div.result')

divResult.addEventListener('click', (div) => {
  if (div.target.classList.contains('stop-start-animation')) {
    document.querySelector('div.animation').classList.toggle('stop')
  } else if (div.target.classList.contains('color')) {
    document.body.classList.toggle('active');
  }
})

