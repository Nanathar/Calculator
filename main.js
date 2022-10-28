const btnStopAni = document.querySelector('div.result:before');

btnStopAni.addEventListener('click', () => {
  console.log('ok')
  document.querySelector('div.animation').classList.toggle('.stop')
})